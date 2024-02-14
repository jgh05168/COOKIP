# build stage
# use the node image from official docker hub
FROM node:20.11.0-alpine3.18 as build-stage

# set the working directory
WORKDIR /app
#copy the working directory int the container
COPY package*.json ./
# install the project dependecies if you npm then npm install
RUN yarn install
# copy the rest of the project files to the container
COPY . .
# build the vue.js application to the production mode to dist folder
# here also if you use npm then npm run build
RUN yarn build

# production stage
# use the lightweight nignx image from the previous state to the nginx container
FROM nginx:stable-alpine as production-stage
# copy the build application from the previous state to the nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html
# copy the nginx configuration file
# here should be the same name as the nginx configuration file in 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# expose the port 80
EXPOSE 8000

# start nginx to server the application
CMD ["nginx", "-g", "daemon off;"]