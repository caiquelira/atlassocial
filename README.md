Atlas Social
===================

Este projeto faz parte da disciplina **CES-26** Desenvolvimento de Aplicações para Internet, do ITA; sob a supervisão do Professor Edgar Yano.

----------

##Índice

[TOC]

----------

Arquitetura
-------------

O **servidor** está hospedado no [**Heroku**](https://dashboard.heroku.com/) e integrado com este repositório do [**GitHub**](https://github.com/caiquelira/atlassocial). Sempre que há um *check-in* na branch master, a aplicação no heroku baixa o código, faz as instalações e builds necessárias e atualiza o servidor.

São utilizadas duas bases de dados. Os dados do tipo texto fazem a utilização do [**MongoDB**](https://www.mongodb.com/) e estão hospedados remotamente no [**mLab**](https://mlab.com/). Os dados do tipo imagem são hospedados no [**Cloudinary**](http://cloudinary.com/), e as imagens são apenas indexadas na primeira base de dados. O servidor só se comunica diretamente com a base de dados do mongoDB.

---------------

BackEnd
-------------

O backend está implementado em javascript, em cima da plataforma [**Node.js**](https://nodejs.org/). Trata-se de uma aplicação que faz a utilização da framework [express.js](http://expressjs.com/), que facilita a construção do aplicativo. As funções do backend são: servir a aplicação (single page application) e servir a API.

###API
A API implementada é do tipo [REST](https://en.wikipedia.org/wiki/Representational_state_transfer), que suporta as operações básicas CRUD (Create, Read, Update, Delete). O código da API está na pasta [routes](https://github.com/caiquelira/atlassocial/tree/master/routes). 

Foi implementado um módulo para a criação genérica de rotas para a API.
> Principais arquivos do módulo:

> - **crud.js**: Implementação das funções CRUD
> - **index.js**: Definição das rotas, especificando o *nome*, o *model* mongoose e o arquivo com as regras de segurança. 


###Banco de Dados
Foi utilizado um bando de dados baseado em documento, o **mongoDB**. Como módulo de integração com o banco de dados, foi utilizado o **mongoose**.


###Outros Módulos
> Outros módulos principais utilizados no servidor
>  - **passport**: Autenticação (Facebook e Google);
> - **morgan**: Logs do servidor;
> - **lodash** e **underscore**: Uso de *functional programming* para processamento de dados;
> - **body-parser** e **cookie-parser**: parsers para extração de dados da request.



----------


FrontEnd
-------------------

A parte do cliente foi implementada utilizando o esquema de *SPA - Single Page Application*, utilizando a biblioteca [**React**](https://facebook.github.io/react/). Foi utilizado, também, a framework [**Grommet**](https://grommet.github.io/), que contém uma série de componentes básicos para a construção da Interface com a utilização do React. O fluxo de dados na UI foi implementado na arquitetura [*flux*](https://facebook.github.io/flux/). A implementação utilizada foi a do [Redux](http://redux.js.org/), uma das mais utilizadas e referenciadas.


Foi implementada a *Internationalization*, isto é, a capacidade de adaptação do aplicativo para diferentes idiomas.

###EchmaScript 6 e 7

O código para a UI foi feito utilizando funcionalidades de novas versões do JavaScript, as versões 6 e 7.
Como os browsers ainda não são capazes de executar todas essas funcionalidades e, temos que prezar pela compatibilidade, foi utilizado um conjunto de modulos do [**Babel**](https://babeljs.io/), que é um *transpiler* (similar a compilador, porém de código fonte para código fonte entre diferentes linguagens) que traduz o código para a versão EchmaScript5, que é compatível com os browsers. Ainda permite a extensão para JavaScript **JSX** (JavaScript XML), para que se possa utilizar-se de tags XML no mesmo código, facilitando a implementação das views.

----------
