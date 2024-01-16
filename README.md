# Projeto de Interface de Perguntas Dinâmicas

### Este projeto foi desenvolvido como parte do teste prático para a vaga de Front End na Fidelimax. A interface simula um sistema de perguntas dinâmicas, onde os usuários podem visualizar e responder a diferentes tipos de perguntas.

## Tecnologias Utilizadas

### React:

Biblioteca para construção de interfaces de usuário.

### Next.js:

Framework React para construção de aplicativos web.

### Tailwind CSS:

Framework de estilos utilitários para agilizar o desenvolvimento.

### Axios:

Biblioteca para fazer requisições HTTP.

### Instalação e Execução

#### Clone o repositório:

git clone https://github.com/Luiginicoletti/frontend-test
Instale as dependências:

`cd frontend-test`
`npm install`

Execute o aplicativo:

`npm run dev`

O aplicativo estará disponível em http://localhost:3000.

## Funcionalidades

### Exibição de Perguntas

Ao carregar a página, as perguntas são obtidas dinamicamente através de uma requisição GET para o endpoint https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json.

As perguntas são renderizadas na tela conforme o formato fornecido no JSON de retorno.

Resposta de Perguntas
O usuário pode responder às perguntas diretamente na interface.
Botões Adicionais
Enviar Fake Post

Simula o envio do formulário através de um POST para https://jsonplaceholder.typicode.com/posts/.
Verifica o retorno para garantir que o backend recebeu os dados com sucesso. Em caso de formulário inválido, exibe um alerta.
Enviar Erro

Simula um erro enviando um GET para https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json.
Exibe um modal com a mensagem de erro enviada no parâmetro "error".
Enviar Sucesso

Simula um sucesso enviando um GET para https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json.
Exibe um modal indicando que tudo ocorreu conforme esperado.
Observações
A interface foi construída com base no layout fornecido no Figma: Link para o Figma.
Certifique-se de que o backend esteja funcionando corretamente para garantir o correto funcionamento da aplicação.
Contato
Para qualquer dúvida ou esclarecimento, entre em contato com seu-nome.

## EXTRA FEATURES

Menu Hamburguer
Darkmode
Toasters alert
And more using shadcn/radix

Eslint/Prettier for tailwind.
_Este projeto foi desenvolvido como parte do teste prático para a vaga de Front End na Fidelimax._
