# Use the official cypress/included image as the base image
FROM cypress/included:latest

# Set the working directory inside the Docker container
WORKDIR /app

# Copy the Cypress tests and other necessary files
COPY ./cypress /app/cypress
COPY ./cypress.config.js /app/cypress.config.js
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
# Add any other necessary files here, e.g., fixtures, support files, etc.
RUN npm install

# Run Cypress tests in headless mode
CMD ["cypress", "run"]