# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]


# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
#FROM node:alpine
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
#WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
#COPY package.json /app

# Installs all node packages
#RUN npm install

# Copies everything over to Docker environment
#COPY . /app

# Uses port which is used by the actual application
#EXPOSE 3000

# Finally runs the application
#CMD [ "REACT_APP_GIT=b9d002941e3e3edeef5bf4292287b6b51c17c3f9", "npm", "start" ]
