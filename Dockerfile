# base image
FROM node

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

COPY prisma ./prisma/

# install dependencies
RUN npm install

# Prisma generate
RUN npx prisma generate

# start app
RUN npm run build

EXPOSE 8080
CMD npm run start
