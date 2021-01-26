# Todo-List

**Rodar o projeto**

Ao clonar o projeto abra o terminal e execute o comando

`npm install`

`npm run serve`

**Rodar o JSON SERVER**

`npm run json:server`

**Rodar o Cypress**

Fazer testes unitários, simulando todas as ações de usuário.

Abra o terminal e execute o comando

`npx cypress open`

**Funcionalidades**

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

**O que foi utilizado no desenvolvimento deste projeto?**

- Vue.js
- Typescript
- Axios (Consumo de API)
- PrimeVue (Biblioteca de componentes) 
  -link documentação https://www.primefaces.org/primevue/
- JSON SERVER (Simular servidor)
- Cypress
  - link documentação https://www.cypress.io/
- Boostrap
- HTML
- SCSS
- ESlint
- Moment (formatação de data)
  - link documentação https://momentjs.com/
- FontAwesome (Gerenciador de ícones)
- Vue Router (Gerenciamento de rotas)
- SPA
- Vue CLI

