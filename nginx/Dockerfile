FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY /dist/solident/browser/ /usr/share/nginx/html

EXPOSE 80
