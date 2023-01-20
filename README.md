# 🧠 Desafio01

Desafio Frontend da primeira semana do sexto módulo da Kenzie Academy.
Aplicação que simula serviço financeiro, como, antecipação de pagamento via cartão de crédito.
Foi usado neste projeto: Vite-react, Styled-components, React-hook-form, Yup, Axios, storybook.

## 🚀 Começando

Explicando o raciocínio:
O componente Card é o pai dos componentes Simulador e Results.<br/>
O Componente Simulador recebe a prop setData para armazenar a response de api.Post, e também renderizará o <form> para fazer a requisição, mais detalhes sobre a requisição e validação detalharei mais a frente.<br/>
O componente  Results recebe por prop data com as response da api.data, que são tratadas em entries, e renderizada por meio da operação lógica onde renderizará o padrão(uma lista zerada) ou uma lista de valores recebidos api.Post.<br/>
Na pasta services por meio do uso da Lib Axios é criada a baseURL, sendo importada no componente simulador.<br/>
Na pasta Validators no arquivo validateData.js, por meio do uso da Lib Yup, são validados os campos do formulário para requisição:<br/>
* No campo "amount" é requerido um valor, optei por ser uma string, para que o usuário informasse nno formato R$ XXXX,XX.<br/>
* No campo "installments" é requerido um número, para informar o número de parcelas e calcular o valor a ser antecipado.<br/>
* No campo "mdr" é requerido um número, para calcular a taxa cobrada na transação.<br/>
* No campo "days" está disponível mas não é obrigátorio, mas se for informado é exigido uma lista de número de comprimento máximo 10.<br/>
    


### 📋 Pré-requisitos

Foi usado o Vite para criação deste Projeto.
No guia no site https://vitejs.dev/guide/, é informado que Vite requer Node.js V14.18+, 16+



### 🔧 Instalação

# Com NPM:
    npm create vite@latest
# Com Yarn:
    yarn create vite
# Com PNPM:
    pnpm create vite
    
E os seguintes comandos abaixo:

    # npm 6.x
    npm create vite@latest my-vue-app --template vue

    # npm 7+, extra double-dash is needed:
    npm create vite@latest my-vue-app -- --template vue

    # yarn
    yarn create vite my-vue-app --template vue

    # pnpm
    pnpm create vite my-vue-app --template vue 


## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Foi usada as seguintes lib's e ferramentas:

* [Vite](https://vitejs.dev/) - Ambiente de desenvolvimento
* [Axios](https://axios-http.com/ptbr/docs/intro) - Cliente HTTP
* [Yup](https://www.npmjs.com/package/yup) - Construtor de schema e validador
* [react-hook-form](https://react-hook-form.com/) - Criação de forms
* [storybook](https://storybook.js.org/) - Documentação

## ❎ To-do List:
* Criação da documentação usando a Lib storybook;

