// Passo 1: Importar a biblioteca axios para fazer as chamadas HTTP
const axios = require('axios');

// Passo 2: Pegar a cidade da linha de comando
// process.argv é um array que contém os argumentos da linha de comando.
// O primeiro é o node, o segundo é o nome do arquivo, o terceiro é o nosso argumento.
const cidade = process.argv[2];

// Verifica se o usuário digitou uma cidade
if (!cidade) {
    console.log("Por favor, forneça o nome de uma cidade.");
    // Encerra o programa se nenhuma cidade for fornecida
    process.exit(1); 
}

// Passo 3: Configurar suas informações da API
const apiKey = '216a70e8ba9bc851330a02c7837cdc37';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

// Passo 4: Fazer a chamada para a API
axios.get(apiUrl )
    .then(response => {
        // Se a chamada for bem-sucedida, o .then() é executado
        
        // Extraímos os dados que nos interessam da resposta da API
        const clima = response.data;
        const temperatura = clima.main.temp;
        const sensacaoTermica = clima.main.feels_like;
        const descricao = clima.weather[0].description;
        const nomeCidade = clima.name;
        const pais = clima.sys.country;

        // Exibe os resultados de forma organizada
        console.log("--------------------------------");
        console.log(`Clima em: ${nomeCidade}, ${pais}`);
        console.log(`Temperatura: ${temperatura}°C`);
        console.log(`Sensação Térmica: ${sensacaoTermica}°C`);
        console.log(`Descrição: ${descricao.charAt(0).toUpperCase() + descricao.slice(1)}`);
        console.log("--------------------------------");
    })
    .catch(error => {
        // Se ocorrer um erro (ex: cidade não encontrada), o .catch() é executado
        if (error.response && error.response.status === 404) {
            console.log("Erro: Cidade não encontrada. Verifique o nome e tente novamente.");
        } else {
            console.log("Ocorreu um erro ao buscar o clima. Detalhes:");
            // Imprime o erro para nos ajudar a depurar
            console.error(error.message); 
        }
    });
