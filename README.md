# 🌦️ Meu Clima - Consultor de Previsão do Tempo

Um simples e eficiente consultor de previsão do tempo via linha de comando, construído com Node.js. Este projeto foi desenvolvido como parte do meu portfólio de estudos, com foco em consumo de APIs externas e manipulação de dados.

## ✨ Funcionalidades

-   Consulta a temperatura atual de qualquer cidade do mundo.
-   Informa a sensação térmica.
-   Exibe uma breve descrição do clima (ex: "Parcialmente nublado", "Chuva leve").
-   Tratamento de erros para cidades não encontradas ou problemas de conexão.

## 🛠️ Tecnologias Utilizadas

-   **[Node.js](https://nodejs.org/en/ )**: Ambiente de execução para o JavaScript no lado do servidor.
-   **[Axios](https://axios-http.com/ )**: Biblioteca para fazer requisições HTTP para a API de clima.
-   **[WeatherAPI](https://www.weatherapi.com/ )**: API utilizada para fornecer os dados de previsão do tempo.

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

-   Você precisa ter o [Node.js](https://nodejs.org/en/ ) instalado na sua máquina.
-   Você precisa de uma chave de API gratuita da [WeatherAPI](https://www.weatherapi.com/ ).

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/Feersec/meu-clima.git
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd meu-clima
    ```

3.  Instale as dependências necessárias:
    ```bash
    npm install
    ```

4.  **Importante:** Renomeie o arquivo `index.js` e adicione sua chave da API na constante `apiKey`.

### Execução

Para ver a previsão do tempo, execute o comando abaixo no seu terminal, substituindo `"Nome da Cidade"` pela cidade que você deseja consultar:

```bash
node index.js "Nome da Cidade"
