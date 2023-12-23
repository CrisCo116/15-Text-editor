# Text Editor Web Application

Welcome to the Text Editor web application! This simple text editor is designed to provide a hassle-free experience for writing and editing text content. Explore the features and functionalities below to get started.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [JavaScript Bundling](#javascript-bundling)
- [Webpack Plugins](#webpack-plugins)
- [IndexedDB Integration](#indexeddb-integration)
- [Install as Desktop App](#install-as-desktop-app)
- [Service Worker and Workbox](#service-worker-and-workbox)
- [Deployment to Render](#deployment-to-render)

## Folder Structure

The application follows a client-server folder structure, making it easy to navigate and manage. Key directories include:

client: Client-side code (frontend).
server: Server-side code (backend).

## Getting Started

Clone the Repository

bash
Copy code
git clone <git@github.com:CrisCo116/15-Text-editor.git>
Install Dependencies

bash
Copy code
npm install

## Running the Application

Execute the following command to start both the backend server and serve the client:

bash
Copy code
npm run start
Visit http://localhost:3000 to access the Text Editor application.

## JavaScript Bundling

Webpack is used to bundle JavaScript files, ensuring efficient loading and execution in the browser.

## Webpack Plugins

Upon running webpack plugins, you'll find:

* A generated HTML file.
* A service worker for offline capabilities.
* A manifest file for a native app-like experience.

## IndexedDB Integration

IndexedDB immediately creates a database storage upon opening the text editor. Your content is saved automatically when clicking off the DOM window.

## Install as Desktop App

Click on the "Install" button to download the web application as an icon on your desktop.

## Service Worker and Workbox

Upon loading, your web application has a registered service worker using Workbox. Static assets are pre-cached for smooth performance.

## Deployment to Render

Deploy your application to Render with confidence. Proper build scripts for a webpack application ensure a seamless deployment experience.

Feel free to explore, contribute, and enjoy the simplicity of the Text Editor web application!