import os
import logging
from langchain_chroma import Chroma
from langchain_community.document_loaders import TextLoader
from langchain_community.document_loaders.directory import DirectoryLoader
from langchain_ollama import OllamaEmbeddings
from langchain_text_splitters import (
    MarkdownHeaderTextSplitter,
    RecursiveCharacterTextSplitter,
)

logger = logging.getLogger("rag_service.index")

# Initialize embeddings
embedding = OllamaEmbeddings(
    model=os.getenv("OLLAMA_EMBED_MODEL", "mxbai-embed-large"),
    base_url=os.getenv("OLLAMA_SERVER_URL", "http://ollama-service:11434")
)

# Initialize vector store (ephemeral by default, matching existing behavior)
vector_store = Chroma(
    collection_name="company_data_collection", 
    embedding_function=embedding
)

def index_documents():
    """
    Load, split, and index documents into the vector store.
    """
    rag_data_path = os.getenv("RAG_DATA_PATH", "rag_data")
    
    if not os.path.exists(rag_data_path):
        logger.warning(f"RAG data directory not found: {rag_data_path}")
        return

    try:
        logger.info(f"Loading documents from {rag_data_path}...")
        loader = DirectoryLoader(rag_data_path, glob="*.md", loader_cls=TextLoader)
        documents = loader.load()
        
        if not documents:
            logger.info("No documents found to index.")
            return

        header_splitter = MarkdownHeaderTextSplitter([("##", "header")])
        recursive_splitter = RecursiveCharacterTextSplitter(
            chunk_size=500,
            chunk_overlap=100,
        )

        documents_tmp = []
        for doc in documents:
            # Split by headers first
            split_headers = header_splitter.split_text(doc.page_content)
            # Then split into smaller chunks
            split_documents = recursive_splitter.split_documents(split_headers)
            
            for spl_doc in split_documents:
                spl_doc.metadata.update(doc.metadata)
            documents_tmp.extend(split_documents)

        logger.info(f"Adding {len(documents_tmp)} chunks to vector store...")
        vector_store.add_documents(documents=documents_tmp)
        logger.info("Indexing completed successfully.")

    except Exception as e:
        logger.error(f"Error during document indexing: {str(e)}", exc_info=True)
        raise
