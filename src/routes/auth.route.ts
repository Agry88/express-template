import { CreateMemberRequestWithLocal } from './../validations/createMember.validation'
import { Ctx } from '../types/context'
import { Router as expressRouter, Request, Response } from 'express'
import valdationResultMiddleware from '../middleware/validationResult.middleware'
import createMemberValidation from '../validations/createMember.validation'
import loginValidation from '../validations/login.validation'
import createMemberHandler from '../handler/createMember.handler'
import LoginHandler from '../handler/login.handler'

export default (ctx: Ctx): expressRouter => {
  const router = expressRouter()

  router.post(
    '/createMember',
    createMemberValidation(ctx),
    valdationResultMiddleware,
    async (req: Request, res: Response) => {
      await createMemberHandler(req as CreateMemberRequestWithLocal, res, ctx)
      /*
        #swagger.summary = '創建會員資訊'
        #swagger.parameters['obj'] = {
          in: 'body',
          description: '這個token是在發送註冊信的時候產生的',
          required: true,
          schema: {
            email: 'YourEmail@gmail.com',
            password: 'YourPassword'
          }
        }
      */
      /*
        #swagger.responses[400] = {
          description: '輸入的資料有誤',
          schema: {
            errors: 'Email is not valid format'
          }
        }

        #swagger.responses[200] = {
          description: '創建會員資訊成功!',
          schema: {
            message: 'Member created',
            error: ''
          }
        }

        #swagger.responses[500] = {
          description: '創建會員失敗,因為伺服器端的不明問題導致失敗',
          schema: {
            message: 'Internal Server Error',
            error: 'Error Reason Here'
          }
        }
      */
    }
  )

  router.post(
    '/login',
    loginValidation(ctx),
    valdationResultMiddleware,
    async (req: Request, res: Response) => {
      await LoginHandler(req, res, ctx)
      /*
        #swagger.summary = '會員登入,成功登入後會回傳一個token'
        #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Email 要是符合 Email的格式,\n Password 至少要有8個字母長,\n nickname 至少要有2個字母長',
          required: true,
          schema: {
            email: 'YourEmail@gmail.com',
            password: 'YourPassword'
          }
        }
      */
      /*

        #swagger.responses[200] = {
          description: '登入成功',
          schema: {
              message: 'Login success',
              error: '',
              token: 'JWT token here'
          }
        }

        #swagger.responses[400] = {
          description: '會員不存在',
          schema: {
            message: 'Member not found',
            error: ''
          }
        }

        #swagger.responses[400] = {
          description: '密碼錯誤',
          schema: {
              message: '',
              error: 'Password is incorrect'
          }
        }

        #swagger.responses[500] = {
          description: '登入失敗,因為伺服器端的不明問題導致失敗',
          schema: {
              message: 'Internal Server Error',
              error: 'Error Reason here'
          }
        }
      */
    }
  )

  return router
}
