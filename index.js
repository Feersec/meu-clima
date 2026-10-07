const axios = require('axios');

const cidade = process.argv.slice(2).join(' ').trim();
const apiKey = process.env.OPENWEATHER_API_KEY;

if (!cidade) {
  console.error('Uso: node index.js "Nome da Cidade"');
  process.exit(1);
}

if (!apiKey) {
  console.error('Erro: defina a variável de ambiente OPENWEATHER_API_KEY antes de executar.');
  process.exit(1);
}

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

axios.get(apiUrl, {
  params: {
    q: cidade,
    appid: apiKey,
    units: 'metric',
    lang: 'pt_br'
  },
  timeout: 10000
})
  .then((response) => {
    const clima = response.data;
    const temperatura = clima.main.temp;
    const sensacaoTermica = clima.main.feels_like;
    const descricao = clima.weather[0].description;
    const nomeCidade = clima.name;
    const pais = clima.sys.country;

    console.log('--------------------------------');
    console.log(`Clima em: ${nomeCidade}, ${pais}`);
    console.log(`Temperatura: ${temperatura}°C`);
    console.log(`Sensação térmica: ${sensacaoTermica}°C`);
    console.log(`Descrição: ${descricao.charAt(0).toUpperCase() + descricao.slice(1)}`);
    console.log('--------------------------------');
  })
  .catch((error) => {
    if (error.response?.status === 404) {
      console.error('Erro: cidade não encontrada. Verifique o nome e tente novamente.');
      return;
    }

    if (error.response?.status === 401) {
      console.error('Erro: chave da API inválida ou não autorizada.');
      return;
    }

    console.error('Não foi possível consultar o clima:', error.message);
  });
