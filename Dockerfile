FROM node:lts-alpine as angular
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
volume /var/cache/nginx
COPY --from=angular app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t curso-angular .
# docker run -p 8091:80 curso-angular
