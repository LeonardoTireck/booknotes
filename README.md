English version at the end of the page.

  
# Leo's Book Notes  

  Uma aplicacao web que permite ao usuario armazenar reviews, notas e avaliacoes de qualquer livro disponivel em uma API Rest.
  

## Indice

1. [Descricao do Projeto](#descricao-do-projeto)
2. [Instalacao](#instalacao)
3. [Uso](#uso)
4. [API Endpoints-pt](#api-endpoints-pt)
5. [Exemplos](#exemplos)
6. [Contribuicoes](#contribuicoes)
7. [Contato](#contato)
8. [Agradecimentos](#agradecimentos)


## Descricao do Projeto

Esse projeto é uma aplicação web que permite aos usuários pesquisarem e escreverem reviews e notas sobre qualquer livro. 
A informação dos livros é requisitada de uma REST API. 
Foi desenvolvida utilizando um design de arquitetura MVC, onde utilizo práticas como Programação Orientada a Objetos.
Todos os dados do livro selecionado, incluindo o review, avaliação, ID da capa, etc., são salvos em um banco de dados SQL. 
Para esse projeto escolhi o PostgreSQL. Utilizei o Axios para fazer as requisições à API.
  

## Instalacao

### Pre-requisitos
    - Node.js (v14 ou acima)
    - npm (v6 ou acima)
    - PostgreSQL
### Setup

1. Clonar o repositório:

    ```bash
    git clone https://github.com/LeonardoTireck/booknotes.git
    cd booknotes
    ```

2. Instalar dependências:

    ```bash
    npm install
    ```

3. Configurar o banco de dados PostgreSQL:
   - Criar um banco de dados, usuário e senha no PostgreSQL.
   - Atualizar as informações de configuração em `./database/db.js`.

4. Rodar a aplicação:

    ```bash
    node index.js
    ```


## Uso

Uma vez que a aplicação estiver rodando, poderá ser acessada em `http://localhost:3000`.

- Para pesquisar um livro, use a barra de pesquisa no topo da página.
- Para adicionar um review, clique no livro desejado da lista e preencha o formulário.

## API Endpoints-pt

### Index

- `GET /`: Obtém a lista completa de reviews do seu banco de dados.
- `POST /sort`: Atualiza a ordenação para o tipo escolhido.

### Search

- `POST /search`: Pesquisa livros com o termo digitado.
- `POST /new`: Envia as informações do livro escolhido para um formulário.

### Add/Edit 

- `POST /add`: Adiciona um novo review e envia as informações do formulário para o banco de dados.
- `POST /edit`: Envia as informações do review escolhido para sua edição em um formulário.

### Delete

- `POST /delete`: Deleta o review.


## Exemplos

### Adicionando um review

1. Pesquise o livro que você quer escrever o review.
2. Clique no livro desejado.
3. Preencha o formulário e envie.

### Exemplo de dado

```json
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "rating": 5,
  "date": "2024-06-19T14:07:05.608Z",
  "review": "Amazing book!",
  "cover_id": "10521270"
}
```


## Contribuicoes

Contribuicoes sao muito bem vindas! Por favor siga esses passos:

  1. Clone o repositorio.
  2. Crie um novo branch.
  3. Faca suas mudancas.
  4. Commit.
  5. Push.
  6. Abra um pull request.


## Contato

Para qualquer pergunta, sugestao ou proposta:

- Email: leotireck@gmail.com


## Agradecimentos

Obrigado [OpenLibrary](https://openlibrary.org/) pela API.




# Leo's Book Notes

A web application that allows users to store reviews, notes, and ratings for any book available via a REST API.

## Table of Contents

1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Examples](#examples)
6. [Contributions](#contributions)
7. [Contact](#contact)
8. [Acknowledgements](#acknowledgements)

## Project Description

This project is a web application that allows users to search for and write reviews and notes about any book. The book information is requested from a REST API. It was developed using an MVC architecture design, utilizing practices such as Object-Oriented Programming. All data of the selected book, including the review, rating, cover ID, etc., are saved in an SQL database. For this project, I chose PostgreSQL. I used Axios to make the requests to the API.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)
- PostgreSQL

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/LeonardoTireck/booknotes.git
    cd booknotes
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure the PostgreSQL database:
   - Create a database, user, and password in PostgreSQL.
   - Update the configuration information in `./database/db.js`.

4. Run the application:

    ```bash
    node index.js
    ```

## Usage

Once the application is running, it can be accessed at `http://localhost:3000`.

- To search for a book, use the search bar at the top of the page.
- To add a review, click on the desired book from the list and fill out the form.

## API Endpoints

### Index

- `GET /`: Retrieves the complete list of reviews from your database.
- `POST /sort`: Updates the sorting to the chosen type.

### Search

- `POST /search`: Searches for books with the entered term.
- `POST /new`: Sends the chosen book information to a form.

### Add/Edit

- `POST /add`: Adds a new review and sends the form information to the database.
- `POST /edit`: Sends the chosen review information for editing in a form.

### Delete

- `POST /delete`: Deletes the review.

## Examples

### Adding a review

1. Search for the book you want to review.
2. Click on the desired book.
3. Fill out the form and submit.

### Example of data

```json
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "rating": 5,
  "date": "2024-06-19T14:07:05.608Z",
  "review": "Amazing book!",
  "cover_id": "10521270"
}
```

## Contributions

Contributions are very welcome! Please follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/LeonardoTireck/booknotes.git
    cd booknotes
    ```

2. Create a new branch:

    ```bash
    git checkout -b feature-branch
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m 'Add new feature'
    ```

5. Push to the branch:

    ```bash
    git push origin feature-branch
    ```

6. Open a pull request.

## Contact

For any questions, suggestions, or proposals:

- Email: leotireck@gmail.com

## Acknowledgements

Thanks to [OpenLibrary](https://openlibrary.org/) for the API.
