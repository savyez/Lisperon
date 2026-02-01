# LISPERON

A simple Express.js web application that fetches and displays random secrets from a public API.

## Overview

This project demonstrates a basic server-side rendered web application using Express and EJS. Each time you visit the home page, the app makes a request to the Secrets API and displays a random secret along with the username of who shared it.

## Features

- **Dynamic Content**: Fetches a random secret from an external API on each page load
- **Server-Side Rendering**: Uses EJS templates to render HTML with data from the API
- **Static Files**: Serves CSS, images, and other assets from the `public` directory
- **Error Handling**: Gracefully handles API failures with a 500 error response

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Usage

Start the server:

```bash
node index.js
```

The server will start on `http://localhost:3000`. Open this URL in your browser to see a random secret displayed.

## Project Structure

```
├── index.js              # Main Express server file
├── package.json          # Project metadata and dependencies
├── README.md             # This file
├── public/               # Static files (CSS, images)
│   ├── images/
│   └── styles/
└── views/
    └── index.ejs         # EJS template for the home page
```

## How It Works

1. When you visit the root route (`/`), the server makes an HTTP request to `https://secrets-api.appbrewery.com/random`
2. The API returns a JSON object containing a secret and a username
3. The data is passed to the EJS template, which renders it as HTML
4. The rendered page is sent back to your browser

If the API request fails, the server responds with a 500 error message.

## Technologies Used

- **Express.js** — Web framework for Node.js
- **Axios** — HTTP client for making API requests
- **EJS** — Embedded JavaScript templating engine

## Configuration

To change the port, edit the `port` variable in `index.js`:

```javascript
const port = 3000; // Change this value
```

## API Reference

**Endpoint**: `https://secrets-api.appbrewery.com/random`

**Response Example**:
```json
{
  "secret": "Your secret message here",
  "username": "Anonymous"
}
```


## Notes

- This project uses ES modules (`import`/`export`). The `package.json` includes `"type": "module"`.
- The external API may be slow or unavailable; consider adding retry logic for production use.
- Static assets are served from the `public` directory; add your CSS and images there.
