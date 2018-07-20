FROM node:8

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5002

CMD [ "npm", "start" ]