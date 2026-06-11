FROM cgr.dev/chainguard/node:latest-dev@sha256:6a2f933ba154d90d2a0c175e292242d060d0ce82303c4b9fc27bc296b258d620 AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

FROM cgr.dev/chainguard/nginx:latest@sha256:bfc999927013bd5d015c496342bd8fc1b43a94e740b61af1fa55734f66e94947
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
