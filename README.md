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
## init
Setup some tools here.

## routes
This folder will have a single file for each logical set of routes.

