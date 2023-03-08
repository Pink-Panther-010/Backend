FROM node

COPY ./src ./src
COPY server.js ./
COPY package.json ./
RUN npm install & npm install mongodb
EXPOSE 3000

CMD ["node", "server.js"]
