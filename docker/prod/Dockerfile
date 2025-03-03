# pull base image
FROM node:20-alpine

# set working directory
WORKDIR /app

# add environment as production
ENV NODE_ENV=production

# copy public folder
COPY public ./public

# copy .next/standalone
COPY .next/standalone ./

# copy .next/static
COPY .next/static ./.next/static

EXPOSE 3000

# start app
CMD ["node", "server.js"]