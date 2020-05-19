# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY tsconfig.json ./
RUN yarn install --silent
#RUN yarn install react-scripts@3.4.1 -g --silent
RUN yarn global add react-scripts@3.4.1 --silent
RUN yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome --silent
#RUN yarn build

# add app
COPY . ./
#EXPOSE 5000:5000

# start app(for development)
CMD ["yarn", "start"]
#CMD [ "serve", "-s", "build" ]