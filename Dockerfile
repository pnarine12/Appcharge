FROM cypress/included:latest
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
