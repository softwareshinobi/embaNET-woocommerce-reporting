FROM nginx:latest

WORKDIR /usr/share/nginx/html/

COPY . .

RUN ls -l

RUN chmod 775 -R *

RUN chown -R www-data:www-data *

RUN ls -l

USER www-data

