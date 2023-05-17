FROM node:18-buster-slim
RUN mkdir /app
WORKDIR /app
COPY index.ts index.html package.json tsconfig.json .textlintrc ruleId2Url.ts yarn.lock .
RUN yarn
RUN yarn build
RUN mkdir uploads

EXPOSE 8080
CMD ["yarn", "start"]