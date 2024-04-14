# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest
WORKDIR /usr/src/app
RUN mkdir /usr/src/app/sourcefiles
RUN mkdir /usr/src/app/export
COPY package.json .
COPY index.ts .
RUN bun install

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts" ]