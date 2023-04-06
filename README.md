# CyLINT

論文用 TextLint Webサーバ

## Requirements

* node
* yarn

または

* docker
* docker-compose

## Install

```bash
yarn && yarn build
mkdir uploads
(index.html内のAPI Endpointを変更)
yarn global add forever
forever start dist
```

または

```bash
(index.html内のAPI Endpointを変更)
docker-compose up
```
