FROM node:16-alpine as builder

COPY . /legislator-dashboard

WORKDIR /legislator-dashboard

RUN yarn
# Build the app
RUN yarn build

FROM nginx:alpine

RUN mkdir -p /var/www/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /legislator-dashboard/dist /var/www/html
