FROM node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app

WORKDIR /opt/app/

COPY *.json ./
COPY src ./src
COPY build ./build
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]