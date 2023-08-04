# Use the Node.js image with npm pre-installed (alpine-based for smaller image size)
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY package*.json ./

# Install project dependencies inside the container
RUN npm install
RUN npm install react-router-dom --save
# Copy the entire project directory to the container
COPY . .

# Expose the port your app is running on (if required)
EXPOSE 5173
# Or whatever port your dev server is running on

# Start your React development server
CMD ["npm", "run", "dev"]

# Or your specific development command
