# NodeJS + Nginx Challenge

## 🏆 About the challenge

We needed to create a project which uses NodeJS + MySQL + nginx and docker-compose to list users that are created on MySQL database. Plus, those users must be created while accessing the home page. The home page must be served by nginx.

## 📝 My Solution

I created a MVC using Nestjs + Handlebars + TypeORM which adds a new user on MySQL database when opening home page. I decided to use NestJS + TypeORM only to try NestJS on Docker environment and learn how it handles a MVC project.

However, I didn't use any patterns like DDD, Migrations or Custom Repository pattern because the main goal was to serve the application using nginx.

## 🛠 Installation

```bash
$ npm install
```

---
## "Production"

Make sure that you have docker installed and running then:

```bash
docker-compose up -d
```

PS: It will take awhile to finish building the app.

Then, open:

http://localhost:8080

---
## Development

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```