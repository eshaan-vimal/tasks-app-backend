FROM node:22

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "start" ]