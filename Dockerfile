FROM node:18-buster-slim
COPY src /
COPY package.json /
RUN cd src && yarn && yarn build
WORKDIR /app

RUN rm -rf src

EXPOSE 8888
CMD ["yarn", "start"]