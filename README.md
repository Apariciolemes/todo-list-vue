# Todo-List
O que foi utilizado no desenvolvimento deste projeto?

- Vue.js
- Typescript
- Axios (Consumo de API)
- PrimeVue (Biblioteca de componentes) 
  - link documentação https://www.primefaces.org/primevue/
- JSON (Simular servidor)
- Cypress (Fazer testes end-to-end, simulando todas as ações de usuário possíveis)
  - link documentação https://www.cypress.io/
- Boostrap
- HTML
- SCSS
- Eslint
- Moment (formatação de data)
  - link documentação https://momentjs.com/
- FontAwesome (Gerenciandor de ícones)
- Vue Router (Gerenciamento de rotas)

Funcionalidades

1-) Adicionar nova tarefa (POST)
- Só é possível adicionar uma nova tarefa se todas as informações estiverem preenchidas.
2-) Alterar status para concluído (PATCH)
3-) Editar tarefa (PUT)
- Só é possível editar as tarefas que não estiverem com o status concluído.
- Só é possível fazer a edição se tiver algum valor diferente do valor inicial.
4-) Remover task (DELETE)
5-) Filtro
- É possivel aplicar o filtro por tipo de status, menos as que estão com o status concluído.
6-) Limpar Task(s)
- Só é possível limpar todas as task com o status concluído, a ação deverá fazer a exclusão em massa.


Rodar o projeto

Ao clonar o projeto abra o terminal e execute o comando
- npm install (instalar as dependências)
- npm run serve (rodar o projeto)

Rodar o Cypress

Abra o terminal e execute o comando
- npx cypress open

Rodar o JSON SERVER

link doc https://github.com/typicode/json-server


