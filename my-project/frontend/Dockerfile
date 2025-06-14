FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./src ./src

RUN npm run build

CMD ["npm", "start"]