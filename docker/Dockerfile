FROM node:alpine AS build

COPY . /app

WORKDIR /app

RUN npm install
RUN npm run export

FROM nginx:alpine as server

RUN rm -rf /usr/share/nginx/html/index.html
COPY --from=build /app/__sapper__/export /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
