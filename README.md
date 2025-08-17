# Emergency Alert App v3

A dynamic, user-friendly emergency preparedness application with user authentication, intelligent hazard classification, and comprehensive emergency checklists for any city worldwide.

## ✨ Features

### **Version 3 Major Enhancements**
- **🔐 User Authentication System**: Secure user signup with MongoDB database
- **🚨 Intelligent Hazard Classification**: Automatic severity assessment (Low/Moderate/High)
- **📊 Severity-Based Checklists**: Dynamic emergency guides based on hazard level
- **🎯 Enhanced Weather Analysis**: Temperature-based extreme heat detection
- **🔄 Real-time Severity Updates**: Live hazard level badges and status indicators

### **Previous Version Features**
- **Dynamic City Search**: Enter any city name to get real-time weather information
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Real-time Weather Data**: Current temperature, humidity, wind speed, and conditions
- **Mobile Responsive**: Optimized for all device sizes

### **Hazard Classification System**
- **🟢 Low Severity**: Haze, Mist, Fog, Light conditions
- **🟡 Moderate Severity**: Rain, Snow, Clouds, Moderate conditions  
- **🔴 High Severity**: Thunderstorm, Tornado, Extreme Heat (>35°C)

### **Weather Conditions Supported**
- 🌧️ **Rain**: Light, Moderate, and Heavy with flood warnings
- 🌫️ **Haze**: Air quality alerts with severity-based responses
- ⛈️ **Thunderstorm**: Electrical safety with escalating precautions
- ❄️ **Snow**: Winter preparedness with storm intensity levels
- ☀️ **Clear**: General preparedness with enhanced guidance

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- OpenWeather API key ([Get one here](https://openweathermap.org/api))

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   MONGO_URI=mongodb://localhost:27017/emergency_alert
   # Or for MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/emergency_alert
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Access the application**
   Open your browser and navigate to:
   - **Main App**: `http://localhost:3000/emergency_app.html`
   - **User Signup**: `http://localhost:3000/signup.html`
   - **Demo Page**: `http://localhost:3000/`

## 🏗️ Project Structure

```
project-101/
├── emergency_app.html      # Main application with hazard classification
├── signup.html            # User registration page
├── index.html             # Demo/landing page
├── server.js              # Backend API server with MongoDB
├── package.json           # Node.js dependencies (v3.0.0)
├── models/
│   └── User.js           # MongoDB user model with password hashing
├── styles/
│   └── style.css         # OpenWeaver design system CSS
└── scripts/
    ├── script.js         # Enhanced JavaScript with severity logic
    └── signup.js         # User authentication handling
```

## 🔧 API Endpoints

### **Weather API**
- `GET /api/weather?city={city}` - Fetches weather data with hazard classification
  - **Response includes**: `severity: { level: 'low|moderate|high', title: 'condition' }`

### **User Authentication**
- `POST /api/users/signup` - User registration
  - **Body**: `{ name, email, password }`
  - **Features**: Email validation, password hashing, duplicate prevention

## 🎨 Design Features

### **OpenWeaver Design System**
- **CSS Variables**: Consistent color scheme and theming
- **Responsive Layout**: Flexbox and Grid-based responsive design
- **Modern Styling**: Clean cards, shadows, and smooth animations
- **Hazard Badges**: Color-coded severity indicators (Green/Yellow/Red)

### **Enhanced UI Components**
- **Hazard Level Badges**: Visual severity indicators
- **Severity-Based Colors**: Green (low), Yellow (moderate), Red (high)
- **Authentication Forms**: Professional signup interface
- **Navigation System**: Seamless page navigation

## 📱 Usage

### **For Users**
1. **Sign Up**: Create an account at `/signup.html`
2. **Search Weather**: Enter any city name in the main app
3. **View Hazards**: See automatic severity classification
4. **Follow Guidelines**: Get severity-specific emergency checklists
5. **Stay Prepared**: Access personalized safety information

### **Hazard Response Levels**
- **🟢 Low Risk**: General preparedness and monitoring
- **🟡 Moderate Risk**: Enhanced precautions and preparation
- **🔴 High Risk**: Immediate action and emergency protocols

## 🛡️ Emergency Preparedness

### **Severity-Based Response System**
- **Immediate Actions**: What to do right now based on severity
- **Safety Measures**: Escalating protective actions
- **Equipment Needs**: Essential items for each risk level
- **Information Sources**: Where to get real-time updates

### **Dynamic Checklist Generation**
- **Condition + Severity**: Combines weather type with risk level
- **Progressive Guidance**: More detailed instructions for higher risks
- **Fallback Support**: General preparedness for unknown conditions

## 🔒 Security Features

### **User Authentication**
- **Password Hashing**: Bcrypt with salt rounds (12)
- **Email Validation**: Regex-based email format checking
- **Duplicate Prevention**: Unique email enforcement
- **Secure Storage**: MongoDB with encrypted passwords

### **API Security**
- **Input Validation**: Server-side data validation
- **Error Handling**: Secure error messages
- **Database Protection**: Mongoose schema validation

## 🚨 Safety Notice

This application provides general emergency preparedness information. Always follow local emergency management instructions and official weather alerts during severe weather events.

## 🔄 Version History

- **v1**: Basic weather display with static city
- **v2**: Dynamic city search, modern UI, enhanced checklists
- **v3**: User authentication, hazard classification, severity-based responses

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

---

**Stay Safe, Stay Prepared!** 🚨✅ 
