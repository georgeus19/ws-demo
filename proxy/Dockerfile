FROM nginx:1.25.4


COPY dhparam.pem /project/dhparam.pem
COPY nginx-selfsigned.crt /project/nginx-selfsigned.crt
COPY nginx-selfsigned.key /project/nginx-selfsigned.key

COPY ssl-redirect.conf /etc/nginx/default.d/ssl-redirect.conf
COPY server.conf /etc/nginx/conf.d/default.conf