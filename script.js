// Emergency Alert App v3 - Enhanced JavaScript with Hazard Classification
document.addEventListener('DOMContentLoaded', function() {
    // DOM element references
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const weatherCard = document.getElementById('weather-card');
    const checklistCard = document.getElementById('checklist-card');
    const hazardBadge = document.getElementById('hazard-level-badge');

    // Enhanced Emergency checklists with severity levels
    const emergencyChecklists = {
        "Rain": {
            "low": {
                title: "🌧️ Light Rain Checklist",
                tasks: [
                    "Carry a light umbrella or raincoat",
                    "Check local weather updates",
                    "Ensure windshield wipers are working",
                    "Drive with extra caution on wet roads"
                ]
            },
            "moderate": {
                title: "🌧️ Moderate Rainfall Checklist",
                tasks: [
                    "Carry a sturdy umbrella and waterproof gear",
                    "Check for traffic and road condition updates",
                    "Avoid driving through standing water",
                    "Keep emergency contact numbers handy",
                    "Monitor local flood warnings"
                ]
            },
            "high": {
                title: "🌧️ Heavy Rainfall & Flood Warning",
                tasks: [
                    "Avoid unnecessary travel during heavy rain",
                    "Move valuables to higher ground if in flood-prone areas",
                    "Ensure phone and power banks are fully charged",
                    "Keep emergency lights and flashlights ready",
                    "Monitor official flood warnings and evacuation orders",
                    "Have emergency supplies kit ready"
                ]
            }
        },
        "Haze": {
            "low": {
                title: "🌫️ Light Haze Checklist",
                tasks: [
                    "Monitor air quality index updates",
                    "Limit outdoor activities if sensitive",
                    "Keep windows closed during peak haze hours",
                    "Stay hydrated and maintain good indoor air circulation"
                ]
            },
            "moderate": {
                title: "🌫️ Moderate Air Quality (Haze) Checklist",
                tasks: [
                    "Stay indoors during peak haze periods",
                    "Use air purifiers if available",
                    "Wear N95 masks when going outside",
                    "Limit outdoor physical activities",
                    "Monitor air quality index updates",
                    "Keep vulnerable individuals indoors"
                ]
            },
            "high": {
                title: "🌫️ Severe Air Quality Warning",
                tasks: [
                    "Stay indoors and close all windows and doors",
                    "Use high-efficiency air purifiers",
                    "Wear N95 masks if going outside is necessary",
                    "Cancel all outdoor activities and events",
                    "Monitor official health advisories",
                    "Seek medical attention if experiencing breathing difficulties"
                ]
            }
        },
        "Thunderstorm": {
            "low": {
                title: "⛈️ Light Thunderstorm Checklist",
                tasks: [
                    "Stay indoors and away from windows",
                    "Unplug sensitive electronic devices",
                    "Monitor weather radar updates",
                    "Have emergency lighting ready"
                ]
            },
            "moderate": {
                title: "⛈️ Moderate Thunderstorm Checklist",
                tasks: [
                    "Stay indoors away from windows and doors",
                    "Unplug electronic devices and appliances",
                    "Avoid using landline phones during storms",
                    "Have emergency supplies kit ready",
                    "Monitor weather alerts and warnings",
                    "Keep pets indoors and secure"
                ]
            },
            "high": {
                title: "⛈️ Severe Thunderstorm Warning",
                tasks: [
                    "Seek shelter in a sturdy building immediately",
                    "Stay away from windows, doors, and exterior walls",
                    "Unplug all electronic devices and appliances",
                    "Avoid using any electrical equipment",
                    "Monitor emergency broadcasts and weather alerts",
                    "Have emergency supplies and first aid kit ready",
                    "Know your emergency evacuation plan"
                ]
            }
        },
        "Snow": {
            "low": {
                title: "❄️ Light Snow Checklist",
                tasks: [
                    "Check local weather forecasts",
                    "Ensure proper winter clothing is available",
                    "Keep emergency supplies updated",
                    "Monitor road conditions before travel"
                ]
            },
            "moderate": {
                title: "❄️ Moderate Snow Storm Checklist",
                tasks: [
                    "Stock up on food, water, and essential supplies",
                    "Keep warm clothing and blankets accessible",
                    "Ensure heating systems are working properly",
                    "Have emergency lighting and power sources ready",
                    "Avoid unnecessary travel during snow conditions",
                    "Keep emergency contact information updated"
                ]
            },
            "high": {
                title: "❄️ Severe Snow Storm Warning",
                tasks: [
                    "Stock up on 3-5 days of food, water, and supplies",
                    "Keep warm clothing, blankets, and emergency heating ready",
                    "Ensure backup power sources are available",
                    "Have emergency lighting and communication devices ready",
                    "Avoid all unnecessary travel",
                    "Monitor official weather warnings and emergency broadcasts",
                    "Know your emergency evacuation routes and shelter locations"
                ]
            }
        },
        "Clear": {
            "low": {
                title: "☀️ All Clear - General Preparedness",
                tasks: [
                    "Review and update emergency contact information",
                    "Check emergency supplies and first aid kits",
                    "Ensure smoke detectors and fire extinguishers work",
                    "Plan evacuation routes from your area",
                    "Stay informed about local emergency procedures"
                ]
            },
            "moderate": {
                title: "☀️ All Clear - Enhanced Preparedness",
                tasks: [
                    "Review and update emergency contact information",
                    "Check emergency supplies and first aid kits",
                    "Ensure smoke detectors and fire extinguishers work",
                    "Plan evacuation routes from your area",
                    "Stay informed about local emergency procedures",
                    "Consider taking first aid and emergency response courses"
                ]
            },
            "high": {
                title: "☀️ All Clear - Maximum Preparedness",
                tasks: [
                    "Review and update emergency contact information",
                    "Check emergency supplies and first aid kits",
                    "Ensure smoke detectors and fire extinguishers work",
                    "Plan evacuation routes from your area",
                    "Stay informed about local emergency procedures",
                    "Consider taking first aid and emergency response courses",
                    "Develop comprehensive emergency plans for your family",
                    "Practice emergency drills regularly"
                ]
            }
        }
    };

    // Event listeners
    searchBtn.addEventListener('click', handleSearch);
    cityInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Handle search button click
    function handleSearch() {
        const city = cityInput.value.trim();
        
        if (!city) {
            showError('Please enter a city name');
            return;
        }

        // Show loading state
        showLoading();
        
        // Fetch weather data
        getWeather(city);
    }

    // Fetch weather data from API
    async function getWeather(city) {
        try {
            const apiURL = `/api/weather?city=${encodeURIComponent(city)}`;
            const response = await fetch(apiURL);
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
            
            const data = await response.json();
            displayWeatherInfo(data, city);
            
        } catch (error) {
            console.error('Weather fetch error:', error);
            showError(`Could not get weather data for "${city}". Please check the city name and try again.`);
        }
    }

    // Display weather information and checklist with severity
    function displayWeatherInfo(data, city) {
        try {
            const condition = data.weather[0].main;
            const temp = Math.round(data.main.temp);
            const humidity = data.main.humidity;
            const windSpeed = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
            const description = data.weather[0].description;
            const severity = data.severity || { level: 'moderate', title: condition };

            // Display hazard level badge
            displayHazardBadge(severity);

            // Determine status and icon
            let status, icon, statusClass;
            
            if (severity.level === 'high') {
                status = `🚨 HIGH ALERT: ${severity.title}`;
                icon = "🚨";
                statusClass = "status-danger";
            } else if (severity.level === 'moderate') {
                status = `⚠️ MODERATE ALERT: ${severity.title}`;
                icon = "⚠️";
                statusClass = "status-warning";
            } else {
                status = `✅ LOW RISK: ${severity.title}`;
                icon = "✅";
                statusClass = "status-safe";
            }

            // Build weather card HTML
            const weatherHTML = `
                <h2>${icon} ${status}</h2>
                <div class="weather-info">
                    <div class="weather-item">
                        <div class="label">City</div>
                        <div class="value">${city}</div>
                    </div>
                    <div class="weather-item">
                        <div class="label">Temperature</div>
                        <div class="value">${temp}°C</div>
                    </div>
                    <div class="weather-item">
                        <div class="label">Condition</div>
                        <div class="value">${description}</div>
                    </div>
                    <div class="weather-item">
                        <div class="label">Humidity</div>
                        <div class="value">${humidity}%</div>
                    </div>
                    <div class="weather-item">
                        <div class="label">Wind Speed</div>
                        <div class="value">${windSpeed} km/h</div>
                    </div>
                </div>
            `;

            // Build checklist HTML based on severity
            let checklistHTML = '';
            if (emergencyChecklists[condition] && emergencyChecklists[condition][severity.level]) {
                const checklist = emergencyChecklists[condition][severity.level];
                checklistHTML = `
                    <h3>${checklist.title}</h3>
                    <ul>
                        ${checklist.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                `;
            } else {
                // Fallback to general preparedness checklist
                const generalChecklist = emergencyChecklists["Clear"][severity.level] || emergencyChecklists["Clear"]["moderate"];
                checklistHTML = `
                    <h3>${generalChecklist.title}</h3>
                    <ul>
                        ${generalChecklist.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                `;
            }

            // Display the cards
            weatherCard.innerHTML = weatherHTML;
            checklistCard.innerHTML = checklistHTML;
            
            // Show the cards with animation
            weatherCard.classList.add('show');
            checklistCard.classList.add('show');

        } catch (error) {
            console.error('Display error:', error);
            showError('Error processing weather data. Please try again.');
        }
    }

    // Display hazard level badge
    function displayHazardBadge(severity) {
        if (hazardBadge) {
            hazardBadge.textContent = `Severity: ${severity.level.toUpperCase()}`;
            hazardBadge.className = `hazard-badge severity-${severity.level}`;
            hazardBadge.style.display = 'inline-block';
        }
    }

    // Show loading state
    function showLoading() {
        weatherCard.innerHTML = '<div class="loading">Fetching weather data...</div>';
        checklistCard.innerHTML = '';
        hazardBadge.style.display = 'none';
        
        weatherCard.classList.add('show');
        checklistCard.classList.remove('show');
        
        // Disable search button during loading
        searchBtn.disabled = true;
        searchBtn.textContent = 'Loading...';
    }

    // Show error message
    function showError(message) {
        weatherCard.innerHTML = `
            <div class="error">
                <h2>❌ Error</h2>
                <p>${message}</p>
            </div>
        `;
        checklistCard.innerHTML = '';
        hazardBadge.style.display = 'none';
        
        weatherCard.classList.add('show');
        checklistCard.classList.remove('show');
        
        // Re-enable search button
        searchBtn.disabled = false;
        searchBtn.textContent = 'Check Weather';
    }

    // Initialize with a default city (optional)
    // Uncomment the line below if you want to show a default city on load
    // cityInput.value = 'London';
    
    console.log('Emergency Alert App v3 loaded successfully with hazard classification!');
}); 