# Frontend Dockerfile
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the Next.js app code
COPY . .

# Expose Next.js development port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]
