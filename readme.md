## Descrição do projeto

API RESTful CRUD Moment's criada com AdonisJS [AdonisJS](https://github.com/adonisjs).

## Preparação de ambiente

- Para executar o projeto na sua máquina será necessário:
- [NodeJS](https://nodejs.org/en/) instalado na versão 12.0 ou superior.
- [Visual Studio Code](https://code.visualstudio.com) instalado e iniciado.

## Instalando o AdonisJS (Orientado a Typescript)

```bash
$ npm init adonis-ts-app@latest .
```

### Dependências

- UUID
- SQlite3
- lucid
- DOTEnv

### Instalando o lucid

Para instalar o lucid, execute o seguinte comando em seu terminal.

```bash
$ npm i @adonis/lucid
```

## Configurando o Lucid

Para configurar o lucid, execute o seguinte comando em seu terminal.
Na aplicação foi usado o SQLite3 como banco de dados mas você pode usar o que bem entender.

```bash
$ node ace configure @adonisjs/lucid
```

## Execução da aplicação

##### Local:
```bash
# development
$ npm run start

# watch mode
$ node ace serve --watch

# production mode
$ npm run start:prod
```