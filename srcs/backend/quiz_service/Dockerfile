FROM node:20-alpine
RUN apk update && apk upgrade 

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .
RUN SKIP_ENV_VALIDATION=true npx prisma generate

# Expose port
EXPOSE 3001
RUN npm install -g nodemon
# Start the application
CMD ["sh", "-c", "npx prisma db push && npm run dev"]