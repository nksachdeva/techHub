FROM node:12.22.0-buster as client-build

WORKDIR /usr/src/app
COPY client/ ./client/
WORKDIR /usr/src/app/client

RUN npm install && npm run build

FROM node:12.22.0-buster as server-build

WORKDIR /home/node/app
COPY --from=client-build /usr/src/app/client/build ./client/build
COPY api/ ./api/
WORKDIR /home/node/app/api
RUN npm install

EXPOSE 5000

CMD ["npm","run","start"]