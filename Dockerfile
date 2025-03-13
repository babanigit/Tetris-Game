# Stage 1: Build Angular App
FROM node:18 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve Angular App with Nginx
FROM nginx:latest
COPY --from=build-stage /app/dist/tetris /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
