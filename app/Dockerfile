FROM node:10.16.0-alpine

ADD ./ /app

WORKDIR /app
RUN npm install
CMD ./node_modules/.bin/gatsby develop --host=0.0.0.0
