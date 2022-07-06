FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm run build

COPY . ./
EXPOSE 8000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8000

CMD ["npm", "run", "dev"]
