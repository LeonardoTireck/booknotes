English version at the end.

  
# Leo's Book Notes  

  Uma aplicacao web que permite ao usuario armazenar reviews, notas e avaliacoes de qualquer livro disponivel em uma API Rest.
  

## Indice

1. [Descricao do Projeto](#descricao-do-projeto)
2. [Instalacao](#instalacao)
3. [Uso](#uso)
4. [API Endpoints-pt](#api-endpoints-pt)
5. [Exemplos](#exemplos)
6. [Contribuicoes](#contribuicoes)
7. [Licenca](#licenca)
8. [Contato](#contato)
9. [Agradecimentos](#agradecimentos)


## Descricao do Projeto

Esse projeto e uma aplicacao web que permite aos usuarios pesquisarem e escreverem reviews e notas sobre qualquer livro. A informacao dos livros e requisitada de uma REST API. 
  

## Instalacao

### Pre-requisitos
    - Node.js (v14 ou acima)
    - npm (v6 ou acima)
    - PostgreSQL
### Setup

1. Clonar o repositorio:
   git clone https://github.com/LeonardoTireck/booknotes.git

2. Instalar Dependencias:
   npm install

3. Configurar o banco de dados PostgreSQL:
   - Criar um banco de dados, usuario e senha no PostgreSQL.
   - Atualizar as informacoes de configuracao em `./database/db.js`

4. Rodar a aplicacao:
   node index.js


## Uso

Uma vez que a aplicacao estiver rodando, podera ser acessada em `http://localhost:3000`.
- Para pesquisar um livro, use a barra de pesquisa no topo da pagina.
- Para adicionar um review, clique no livro desejado da lista e preencha o formulario.


## API Endpoints-pt



Foi desenvolvida pensando em utilizar um design de arquitetura MVC, aonde faco o uso de praticas como Programacao Orientada a Objetos.
Todos os dados do livro selecionado, incluindo o review, rating, cover id... Tudo fica salvo em um banco de dados SQL. Para esse projeto escolhi o Postgres. 
Utilizei o Axios para fazer o request a API.  
