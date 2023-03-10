import swaggerAutogenClient from 'swagger-autogen'

const swaggerAutogen = swaggerAutogenClient()

const outputFile = './swagger_output.json'

const endpointsFiles = ['./src/routes/index.ts']

const doc = {
  host: 'localhost:3001',
  basePath: '/api',
  tags: [
    {
      name: 'auth',
      description: 'auth router'
    }
  ]
}

void swaggerAutogen(outputFile, endpointsFiles, doc)
