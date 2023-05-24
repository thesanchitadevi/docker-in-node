# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine3.16

# Expose the port on which the app will be running
EXPOSE 3005

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Start the app
CMD ["node", "index.js"]
