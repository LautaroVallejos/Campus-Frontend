FROM node:16-alpine3.16

WORKDIR /usr/src/app

COPY ./package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

RUN npm run lint

RUN npm run build

CMD [ "npm", "run", "start" ]