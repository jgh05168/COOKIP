FROM node:16.10.0
WORKDIR /backend

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3001

CMD ["node","server.js"]
