# Emergency Alert App

A secure client-server application that provides real-time weather alerts and emergency checklists for Mumbai, India.

## Features

- Real-time weather monitoring for Mumbai
- Emergency checklists for dangerous weather conditions
- Secure API key management
- Responsive web interface
- Server-side API proxy for enhanced security

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- OpenWeatherMap API key

## Setup Instructions

### 1. Get an OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Copy the API key

### 2. Configure Environment Variables

1. Open the `.env` file in the root directory
2. Replace `"YOUR_API_KEY_HERE"` with your actual OpenWeatherMap API key:
   ```
   OPENWEATHER_API_KEY="your_actual_api_key_here"
   ```

### 3. Install Dependencies

Run the following command in the project root directory:

```bash
npm install
```

This will install the required packages:
- `express` - Web framework for Node.js
- `dotenv` - Environment variable management
- `node-fetch` - HTTP client for Node.js

### 4. Start the Server

Run the following command to start the application:

```bash
npm start
```

Or alternatively:

```bash
node server.js
```

The server will start running on `http://localhost:3000`

### 5. Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
project 101/
├── .env                    # Environment variables (API key)
├── package.json           # Node.js dependencies
├── server.js             # Express server
├── emergency_app.html    # Frontend application
├── styles/               # CSS stylesheets
│   └── style.css
└── scripts/              # JavaScript files
    └── script.js
```

## How It Works

1. **Frontend**: The `emergency_app.html` file contains the user interface
2. **Backend**: The `server.js` file acts as a secure proxy between the frontend and OpenWeatherMap API
3. **Security**: The API key is stored server-side in the `.env` file and never exposed to the client
4. **API Proxy**: Weather requests go through `/api/weather` endpoint which securely forwards them to OpenWeatherMap

## API Endpoints

- `GET /api/weather?city=Mumbai` - Fetches weather data for the specified city

## Troubleshooting

- **Port already in use**: If port 3000 is busy, change the `PORT` variable in `server.js`
- **API key errors**: Ensure your OpenWeatherMap API key is correct and active
- **Module not found**: Run `npm install` to install dependencies

## Security Features

- API keys are never exposed to the client
- Server-side validation of city parameters
- Error handling for API failures
- Static file serving with proper security headers

## License

MIT License 
