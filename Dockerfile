FROM node:8
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "dist:server"]