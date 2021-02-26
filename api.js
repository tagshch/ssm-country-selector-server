const https = require('https');

function requestAllCountries() {
  return new Promise((resolve, reject) => {
    https.get('https://restcountries.eu/rest/v2/all', (res) => {
      let chunks = [];

      res.on('data', (chunk) => {
        chunks.push(chunk);
      });

      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const stringData = buffer.toString('utf8');
        const data = JSON.parse(stringData);

        resolve(data);
      })

    }).on('error', (error) => {
      console.error('[SERVER ERROR]', error.name, error.message);
      reject([]);
    });
  })
}

module.exports = {
  requestAllCountries
};
