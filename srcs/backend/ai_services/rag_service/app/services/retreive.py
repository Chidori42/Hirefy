import logging
from services.document_index import vector_store

logger = logging.getLogger("rag_service.retrieve")

async def retrieve_async(prompt):
    """
    Retrieve relevant documents from the vector store asynchronously.
    """
    try:
        # LangChain's Chroma doesn't always have a native async MRR, 
        # but we can run it in a threadpool or use asearch if available.
        # For now, let's stick to the sync call but wrap it or use asearch.
        
        # vector_store.amax_marginal_relevance_search is often available in newer LangChain
        if hasattr(vector_store, "amax_marginal_relevance_search"):
            vector_docs = await vector_store.amax_marginal_relevance_search(prompt, k=3, fetch_k=10)
        else:
            # Fallback to sync search if async is not available
            vector_docs = vector_store.max_marginal_relevance_search(prompt, k=3, fetch_k=10)

        context = ""
        for doc in vector_docs:
            header = doc.metadata.get("header", "Information")
            context += f"## {header}\n\n{doc.page_content}\n\n"

        return context
    except Exception as e:
        logger.error(f"Retrieval failed: {str(e)}", exc_info=True)
        return "No relevant context found."
