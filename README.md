# Appcharge Dashboard and Appcharge Shop

Welcome to the Appcharge application! Appcharge is providing mobile gaming studios with a white-label web store solution to sell their virtual game goods outside of the game directly to their players with reduced fees. This system consists of two integrated parts: Appcharge Dashboard and Appcharge Shop. 
## Appcharge Dashboard

The Appcharge Dashboard is a powerful web application designed to manage the Appcharge Shop. It provides various features to handle the shop products and track orders made from there. Main modules include:

1. **Management** (Dashboard, Orders, Segments, Pricing)

2. **Studio** (Store, Products, Offers UI, Badges, Assets)

3. **Offers** (Bundles, Promotions)

## Appcharge Shop

The Appcharge Shop is a user-facing web application that provides customers access to view and order virtual products. Its primary goal is to offer a seamless and user-friendly shopping experience. Here are the main features of the Appcharge Shop:

1. **Product Catalog**: The shop displays a catalog of all available products.

2. **Order Placement**: Customers can select products and proceed to the checkout process to place an order.

3. **Payment Integration**: The shop is integrated with a secure payment gateway to facilitate seamless and secure online transactions.

4. **Asset Delivery**: After a successful order and payment, customers receive their purchased assets.

5. **Transaction Registration**: Once a payment is made and assets are delivered, the transaction details are registered and reflected in the Appcharge Dashboard.

## Code Structure

The project has the following directory structure:

```
root
  ├── cypress/
  │   ├── support/
  │   │   ├── commands.js
  │   │   ├── e2e.js
  │   │   ├── selectors.js
  │   ├── e2e/
  │   │   ├── features/
  │   │   │   ├── *.feature
  │   │   ├── step_definitions/
  │   │   │   ├── *.js
  │   ├── downloads/
  │   ├── videos/
  ├── node_modules/
  ├── cypress.config.js
  ├── package.json
  ├── .gitignore
  ├── .cypress-cucumber-preprocessorrc
  └── Dockerfile
```

- `cypress/`: This directory contains the Cypress test files
  - `support/`: Contains all config files
    - `commands/`: Contains custom commands of cypress
    - `e2e/`: Contains files that run before all tests
    - `selectors/`: Contains web element selectors
  - `e2e/`: Contains Cucumber feature files and step definitions
     - `features/`: Contains Cucumber feature files
    - `step_definitions/`: Contains step files of tests
  - `downloads/`: Contains file that were downloaded during tests
  - `vidoes/`: Contains video reports
- `node_modules/`: The npm packages and dependencies required for the project

- `cpres.config.js`: Cypress configuration file
- `.gitignore`: Contains files and directories that should not be committed
- `package.json`: The npm package file containing project dependencies and scripts
- `.cypress-cucumber-preprocessorrc`: Contains configuration for cucumber
- `Dockerfile`: The Docker configuration file used to build the Docker image for the project

## How to Run

To run the Cypress Cucumber project with Docker, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:pnarine12/Appcharge.git
   cd Appcharge-main
   ```

2. **Build the Docker Image:**
   ```bash
   docker build -t my-cypress-tests .
   ```

4. **Run the Docker Container:**

For Windows
   ```bash
   docker run -it -v PWD:/app my-cypress-tests --browser chrome
   ```
For Linux
   ```bash
   docker run -it -v $PWD:/app my-cypress-tests --browser chrome
   ```
   This command will run the Cypress Cucumber tests in Chrome inside the Docker container and output the test results.
