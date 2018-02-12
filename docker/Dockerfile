FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Port for the app
EXPOSE 8080

CMD [ "npm", "start" ]
