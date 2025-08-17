require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the frontend static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Create an API endpoint to proxy weather requests
app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(apiURL);
        const weatherData = await weatherResponse.json();
        if (weatherResponse.status !== 200) {
          return res.status(weatherData.cod).json(weatherData);
        }
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 