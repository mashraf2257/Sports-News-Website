# Sports News Website - Setup Guide

## ⚠️ API Keys Setup Required

This project requires API keys from multiple services. Follow the steps below to get your own keys.

### Getting API Keys

1. **OpenWeatherMap API** (for weather data)
   - Go to [openweathermap.org](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard
   - Replace `YOUR_WEATHER_API_KEY` in `Js/main.js`

2. **ExchangeRate API** (for currency conversion)
   - Go to [exchangerate-api.com](https://www.exchangerate-api.com)
   - Sign up for a free account
   - Get your API key from the dashboard
   - Replace `YOUR_EXCHANGE_API_KEY` in `Js/main.js`

3. **AllSports API** (for live sports scores)
   - Go to [allsportsapi.com](https://www.allsportsapi.com)
   - Register and get your API key
   - Replace `YOUR_SPORTS_API_KEY` in `Js/main.js`

4. **NewsAPI** (for news articles)
   - Go to [newsapi.org](https://newsapi.org)
   - Sign up and get your API key
   - Replace `YOUR_NEWS_API_KEY` in `Js/main.js`

### Quick Setup

1. Open `Js/main.js`
2. Replace each `YOUR_*_API_KEY` with your actual API keys
3. Save the file
4. Run the website locally or deploy it

### Security Note

- **Never commit API keys to GitHub**
- Keep your keys private
- Each key is unique to your account
- If you accidentally expose a key, revoke it immediately from the API provider

### For Developers

If you're contributing, you'll need to set up your own API keys following the steps above. This ensures each developer uses their own keys and we maintain security best practices.

---

Need help? Check the official documentation for each API service.
