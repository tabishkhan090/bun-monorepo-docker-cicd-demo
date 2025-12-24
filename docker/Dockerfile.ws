FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./packages ./packages
COPY ./bun.lock ./bun.lock
COPY ./turbo.json ./turbo.json

COPY ./apps/websocket ./apps/websocket
RUN bun install

RUN bun run prisma:generate

EXPOSE 8081

CMD ["bun", "run", "start:ws"]
