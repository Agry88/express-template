# Package

* Express - Framework
* Prisma - ORM
* Express-Validator - Validator
* Swagger-Autogen - Gernerate Document
* Eslint - Syntax Check
* Jest,Supertest - API Endpint Test

# Before Running

## Download Packages
```
npm i
```

## Setup Environment Variables
Create .env file then have the following content
```
DATABASE_URL = "mysql://root:illusion-admin@0.0.0.0:2001/code_island"
EMAIL_USER = "codeisland88@gmail.com"
EMAIL_PASSWORD = "password"
HOST_URL = "http://localhost:3001"
JWT_SECRET = "hashHere"
```

## Setup Database
```
npx prisma migrate dev --name init
```

# Running

## Start Development
```
npm run dev
```

## Generate Swagger Document
```
npm run swagger-autogen
```

## Start Testing
```
npm run test
```

# Folder Structure
First you will see three main folder `tests` has all the test code in it to test API endpoints, `prisma` has schema.prisma to be our database schema and seed file to initial database content, `src` houses the source code.

Let's take a look at `src` folder, `init` folder houses Express and Prisma connection.

`config` folder declare environment variables and maybe other configuration in here.

And then we have the `routes` folder that will have a single file for each logical set of routes and you will have to write your endpoints here.

before or after validation you may have to do some process to request content, then you will need middleware and you can save those function in `middleware` folder

every endpoint will have to validate request content, and that's `validations` folder for, you will have your endpoint's validation file here.

after validation you will have to handle the main part of your endpoint, then it wiil be `handlers` job to deal with it.

when you are validating or handling you will use some functions that is connect to database or not, if it does storage it in `helpers` folder or storage it in `utils` folder.

`types` folder is the easist part, just storage types :D

