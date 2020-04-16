FROM node:dubnium-alpine
WORKDIR /app
ADD . /app
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["sh", "/app/entrypoint.sh"]