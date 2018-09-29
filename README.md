# Aplicação Web + Node Express + Restfull

Projeto de uma aplicação para cadastro de usuários utilizando um webservice restfull implementado em nodejs. 

## Pré-requisitos

Uma vez que estamos utilizando o banco de dados javascritp NeDB, ao executar a aplicação ela já estará pronta para operação das funcionalidades.

## Funcionalidades

O webservice realiza as operações restfull para a entidade usuários.

* [GET] - '/users' : retorna a lista de usuários
* [POST] - '/users': cadastra um usuários
* [GET] - '/users/:id': retorna usuário selecionado
* [PUT] - '/users/:id': edita usuário selecionado
* [DELETE] - '/users/:id': remove usuário selecionado

