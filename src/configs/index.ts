import dotenv from 'dotenv'
dotenv.config()

export type Config = {
  port: number
  hostURL: string
  jwtSecret: string
}

const config: Config = {
  port: process.env.PORT === undefined ? 3001 : Number(process.env.PORT),
  hostURL: process.env.HOST_URL === undefined ? '' : process.env.HOST_URL,
  jwtSecret: process.env.JWT_SECRET === undefined ? '' : process.env.JWT_SECRET
}

export default config
