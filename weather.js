const https = require('https');

const api = {
  key: API_KEY,
  call: 'https://api.openweathermap.org/data/2.5/'
}

const weatherFetch = (city) => {
  https.get(`${api.call}weather?q=${city}&units=metric&appid=${api.key}`, (resp) => {
    resp.on('data', (d) => {
      const info = JSON.parse(d);
      info.cod === '404' ? console.log(info.message) : console.log(`Location: ${info.name} \n Temperature: ${info.main.temp} °C \n Env: ${info.weather[0].description} \n Visisbility: ${info.visibility / 1000} km`);
    })
  })
    .on('error', (err) => console.log(`Error: ${err}!`))
}

if (process.argv[2] === 'weather') {
  console.log('Welcome to the Weather-CLI :C');
  weatherFetch(process.argv[3]);
};
