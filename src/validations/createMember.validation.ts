import { Ctx } from './../types/context'
import { checkSchema, ValidationChain } from 'express-validator'
import checkDataExistInDatabase from '../helpers/isDataExistInDatabase'
import getErrorMessage from '../utils/getErrorMessage'
import { Request } from 'express'

export interface CreateMemberRequestWithLocal extends Request {
  locals: {
    createMemberData: {
      email: string
      password: string
    }
  }
}

export default function createMemberValidation (ctx: Ctx): ValidationChain[] {
  return checkSchema({
    email: {
      in: 'body',
      notEmpty: {
        errorMessage: 'Email is required'
      },
      isEmail: {
        errorMessage: 'Email is not valid format of email'
      },
      custom: {
        options: async (_, { req }) => {
          try {
            const isExist = await checkDataExistInDatabase(ctx, 'member', {
              email: req.body.email
            })
            if (isExist) throw new Error('Email is already exists')

            req.locals = {
              createMemberData: {
                email: req.body.email,
                password: req.body.password
              }
            }

            return true
          } catch (error) {
            throw new Error(getErrorMessage(error))
          }
        }
      }
    }
  })
}
