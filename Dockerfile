# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and potentially package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Command to run your application
CMD ["npm", "run", "dev"]



#docker build -t sequelize-orm-ceso .
#docker run sequelize-orm-ceso

