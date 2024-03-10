# Weather-CLI

Welcome to Weather-CLI, a simple command-line interface (CLI) tool built with Node.js to fetch weather information for a given city.

## Features

- Retrieve current weather data for a specific city.
- Display temperature, weather conditions, and visibility.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/weather-cli.git
   ```

2. Navigate into the project directory:

   ```bash
   cd weather-cli
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To use Weather-CLI, follow these steps:

1. Open your terminal.

2. Navigate to the directory where you cloned the repository.

3. Run the following command:

   ```bash
   node weather.js weather <city>
   ```

   Replace `<city>` with the name of the city for which you want to fetch weather data.

## Example

```bash
node weather.js weather mashhad
```

## API Key

Please note that Weather-CLI uses the OpenWeatherMap API. You'll need to sign up for an API key at [OpenWeatherMap](https://openweathermap.org/api) and replace `api.key` in `weather.js` with your own API key.
