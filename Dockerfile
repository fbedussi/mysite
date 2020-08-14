FROM nginx
# RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
# COPY nginx /etc/nginx
