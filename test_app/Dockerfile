FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the built Flutter web app from the build environment to this container
COPY build/web ./build/web

RUN npm init -y && npm install express --save
COPY server.js ./

# Install Node.js dependencies
RUN npm install

# Expose the port that the Node.js server will run on
# EXPOSE process.env.PORT

# Start the Node.js server to serve the Flutter web app
CMD ["node","server.js"]