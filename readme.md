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

### Requisições

## Inserindo um Momento

**Endpoint:** `/moments`

**Method:** `POST`

**Request Body:**

```json
{
    "title": "Momento de teste",
    "description": "Momento para testar",
    "image": "imagem inserida convertida uuid"
}
```

**Response Body:**

```json
{
    "message": "Momento criado com sucesso!",
    "data": {
        "title": "Momento de teste",
        "description": "Momento para testar",
        "image": "8e2c8553-98c3-49a6-ad39-f55fb90326f3.jpg",
        "created_at": "2022-03-01T18:14:37.137-03:00",
        "updated_at": "2022-03-01T18:14:37.138-03:00",
        "id": 1
}
```

## Resgatando momento por ID

**Endpoint:** `/moments/1`

**Method:** `GET`

**Response Body:**

```json
{
        "id": 1,
        "title": "Segundo Momento",
        "description": "Segunda Descrição",
        "image": "8e2c8553-98c3-49a6-ad39-f55fb90326f3.jpg",
        "created_at": "2022-03-01T17:59:12.000-03:00",
        "updated_at": "2022-03-01T17:59:12.000-03:00"
}
```

## Resgatando todos os Momentos

**Endpoint:** `/moments`

**Method:** `GET`

**Response Body:**

```json
{
        "id": 3,
            "title": "Atualizando Momento dnv",
            "description": "Momento atualizado",
            "image": "e0f62b1f-629d-4c35-803f-c2f72f9367c9.jpg",
            "created_at": "2022-03-01T18:14:37.000-03:00",
            "updated_at": "2022-03-01T18:25:19.000-03:00"
        },
        {
            "id": 2,
            "title": "Segundo Momento",
            "description": "Segunda Descrição",
            "image": "8e2c8553-98c3-49a6-ad39-f55fb90326f3.jpg",
            "created_at": "2022-03-01T17:59:12.000-03:00",
            "updated_at": "2022-03-01T17:59:12.000-03:00"
        },
        {
            "id": 1,
            "title": "Primeiro titulo",
            "description": "Primeira descrição",
            "image": null,
            "created_at": "2022-03-01T17:45:56.000-03:00",
            "updated_at": "2022-03-01T17:45:56.000-03:00"
        }
}
```

## Atualizando um momento

**Endpoint:** `/moments/1`

**Method:** `PATCH`

**Request Body:**

```json
{
    "title": "Atualizando Momento dnv",
    "description": "Momento atualizado",
    "image": "imagem inserida convertida uuid"
}
```

**Response Body:**

```json
{
        "id": 1,
        "title": "Atualizando Momento dnv",
        "description": "Momento atualizado",
        "image": "e0f62b1f-629d-4c35-803f-c2f72f9367c9.jpg",
        "created_at": "2022-03-01T18:14:37.000-03:00",
        "updated_at": "2022-03-01T18:25:19.765-03:00"
}
```

## Deletando um momento

**Endpoint:** `/moments/1`

**Method:** `DELETE`

**Response Body:**

```json
{
        "id": 1,
        "title": "Atualizando Momento dnv",
        "description": "Momento atualizado",
        "image": "e0f62b1f-629d-4c35-803f-c2f72f9367c9.jpg",
        "created_at": "2022-03-01T18:12:14.000-03:00",
        "updated_at": "2022-03-01T18:12:14.000-03:00"
    },
        "message": "Exclusão de momento efetuado com sucesso!"
}
```

