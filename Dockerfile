FROM node:19-alpine3.17

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080
CMD ["yarn", "run", "dev"]
