# Sports News Website

A dynamic web application that provides comprehensive sports news, live match updates, team standings, and detailed statistics. This platform aggregates sports data from multiple sources and presents it in an interactive and user-friendly interface.

## Features

- **📰 Latest Sports News** - Stay updated with the latest news across various sports categories
- **⚽ Live Matches** - View live match updates and scores from multiple leagues
- **🏆 League Standings** - Check current standings and team rankings
- **📊 Sports Statistics** - Detailed player and team statistics
- **🌤️ Weather Integration** - Check weather conditions for match locations
- **💱 Currency Conversion** - Real-time currency exchange rates

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **APIs Integration**:
  - OpenWeatherMap API (weather data)
  - ExchangeRate API (currency conversion)
  - AllSports API (live sports scores)
  - NewsAPI (news articles)
- **Responsive Design**: Mobile-friendly and cross-browser compatible

## Project Structure

```
Sports News Website/
├── index.html              # Home page with latest news
├── matches.html            # Live matches and scores
├── Standing.html           # League standings and rankings
├── stats.html              # Sports statistics
├── SETUP.md               # API keys setup guide
├── css/
│   ├── Style.css          # Main stylesheet
│   ├── matches.css        # Matches page styling
│   ├── Standing.css       # Standings page styling
│   └── stats.css          # Stats page styling
├── Js/
│   ├── main.js            # Main JavaScript logic
│   ├── matches.js         # Matches functionality
│   ├── Standing-Script.js # Standings functionality
│   └── stats.js           # Stats functionality
└── img/                   # Image assets
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- API keys from the following services:
  - OpenWeatherMap
  - ExchangeRate API
  - AllSports API
  - NewsAPI

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mashraf2257/sports-news-website.git
   cd sports-news-website
   ```

2. **Configure API Keys**
   - Follow the detailed instructions in [SETUP.md](SETUP.md)
   - Replace placeholder API keys in `Js/main.js` with your actual keys

3. **Run Locally**
   - Open `index.html` in your web browser, or
   - Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

4. **Access the Website**
   - Navigate to `http://localhost:8000` in your browser

## Security

⚠️ **Important**: Never commit API keys to GitHub. Each developer should use their own API keys. For production deployment, use environment variables or a secure configuration management system.

## Usage

- **Home Page**: Browse the latest sports news across multiple categories
- **Matches Page**: View live match scores and updates
- **Standings Page**: Check league tables and team rankings
- **Stats Page**: Explore detailed sports statistics

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## Developers

- Mohamed Ashraf
- Sherif Ahmed
- Nader Hatem
- Fatma Abdo
- Basmala Salah
