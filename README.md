# Project Name: Evaluate a News Article with Natural Language Processing

Welcome to the Natural Language Processing (NLP) Web Tool project! This project is part of the Udacity Front-End Web Developer Nanodegree Program and is designed to give you hands-on experience with a range of web development tools and technologies.

## Development Environment

This project is developed using:

- Node.js: v20.15.1

To check your Node.js version, run the following command in your terminal:

    ```bash
    node -v

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [API Setup](#api-setup)
8. [Testing](#testing)
9. [Service Workers](#service-workers)
10. [Deployment](#deployment)


## Project Overview
In this project, you will create a web-based tool that leverages Natural Language Processing to analyze articles and blog posts from various websites. The application will provide users with insights into the content's subjectivity, tone, and other linguistic attributes.

The primary goal of this project is to simulate a real-world front-end development environment, giving you hands-on experience with tools and technologies commonly used in the industry. You will practice setting up Webpack, integrating Sass for styling, and utilizing Webpack loaders and plugins. Additionally, you will work on creating layouts and page designs, implementing service workers, and making requests to external APIs.


## Key Features

- Setting up Webpack and configuring development and production environments
- Integrating Sass for styling
- Using Webpack loaders and plugins for handling different assets
- Making requests to the MeaningCloud API for sentiment analysis
- Ensuring offline functionality with Service Workers
- Writing unit tests using Jest

## Technology Stack

- **Backend**: Node.js with Express framework
- **Frontend**: 
  - HTML
  - CSS
  - JavaScript
  - Sass (for advanced styling)
- **Build Tool**: Webpack (configured for both development and production environments)
- **API**: MeaningCloud API for text analysis
- **Additional**: 
  - Service Worker for offline functionality
  
## Installation
To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://HadelAbdellatif/nlp-nanodegree-project
   cd nlp-nanodegree-project
   

2. Install dependencies:
    ```bash
    npm install

3. Set up Webpack:
Ensure that your webpack.dev.js and webpack.prod.js files are correctly configured. 

4. Run the development server:
    ```bash
    npm run build-dev

5. Build the production files:
    ```bash
    npm run build-prod   

These commands will set up the project on your local machine and prepare it for both development and production use.

## Project Structure
The project is organized as follows:

- `src/`: Contains the source code for the project.
  - `index.js`: The entry point for the application.
  - `styles/`: Contains Sass files for styling.
  - `service-worker.js`: Service Worker file for offline functionality.
- `dist/`: The directory where the production build is output.
- `webpack.config.js`: The Webpack configuration file.
- `tests/`: Contains unit tests.

## Usage
1. Open the application in your browser.
2. Enter the URL of the news article you want to analyze.
3. Click the "Analyze" button to see the sentiment analysis results.

## API Setup
1. Sign up for an API key from [MeaningCloud](https://www.meaningcloud.com/developer/create-account).

2. Create a `.env` file in the root directory of your project and add your API key:
    ```text
    API_KEY=your-meaningcloud-api-key
    
3. Install the dotenv package to load environment variables:
    ```bash
    npm install dotenv
    
4. Update src/index.js to use the API key:

    ```javascript
    require('dotenv').config();
    
    const apiKey = process.env.API_KEY;

5. Use the apiKey variable when making API requests.

6. Add .env to your .gitignore file:
    ```text
    .env

This setup allows secure management of your API key while keeping it out of version control.


## Testing
This project uses Jest for unit testing. Jest is a powerful JavaScript testing framework that ensures our code is working as expected.
    ```bash
    npm run test 

### Setup

1. Jest is included in the project dependencies. If not already installed, you can add it by running:
   ```bash
   npm install --save-dev jest

2. In package.json, ensure you have a test script:
    
    ```json
    "scripts": {
    
    "test": "jest"
    }

3. Running Tests
To run all tests, use the following command:
    ```bash
    npm run test

## Service Workers
This project implements Service Workers to enable offline functionality, ensuring that the application remains accessible even when the network is unavailable. We use Google Workbox in conjunction with Webpack to simplify the implementation of Service Workers.

### Implementation

1. **Workbox Plugin**: We use the Workbox Webpack Plugin to generate a service worker file automatically.

2. **Webpack Configuration**: The `webpack.prod.js` file is configured to include the Workbox plugin:

   ```javascript
   const WorkboxPlugin = require('workbox-webpack-plugin');

   // In the plugins array:
   new WorkboxPlugin.GenerateSW()
   
3. Service Worker Registration: The service worker is registered in the index.html file:

    ```xml
    <script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
        });
    }
    </script>

## Deployment
To deploy the application, build the production files and upload the contents of the dist/ directory to your web server.
