# 🌦️ Meu Clima

Aplicação de linha de comando em **Node.js** para consultar o clima atual de uma cidade usando a API do **OpenWeatherMap**.

Projeto de estudo voltado a consumo de APIs REST, tratamento de erros e uso seguro de credenciais por variável de ambiente.

## Funcionalidades

- Consulta de temperatura atual e sensação térmica
- Descrição do clima em português
- Exibição de cidade e país retornados pela API
- Tratamento de cidade não encontrada, chave inválida e falhas de conexão
- Chave da API mantida fora do código-fonte

## Tecnologias

- JavaScript
- Node.js
- Axios
- OpenWeatherMap API

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Feersec/meu-clima.git
cd meu-clima
npm install
```

### 2. Crie uma chave no OpenWeatherMap

Nunca coloque a chave diretamente no arquivo `index.js`.

No **PowerShell**:

```powershell
$env:OPENWEATHER_API_KEY="SUA_CHAVE"
node index.js "Peruíbe"
```

No **Linux/macOS**:

```bash
export OPENWEATHER_API_KEY="SUA_CHAVE"
node index.js "Peruíbe"
```

## Segurança

Credenciais, tokens e chaves de API não devem ser versionados no GitHub. O projeto lê a credencial a partir da variável de ambiente `OPENWEATHER_API_KEY`.

## Objetivo do projeto

Praticar integração com serviços externos, requisições HTTP, parâmetros de API, validação de entrada e tratamento de erros em Node.js.

---

**Autora:** Fernanda Ferreira Bernardo  
Estudante de Engenharia de Software
