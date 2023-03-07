import jwt from 'jsonwebtoken'
import { Response, Request } from 'express'
import { Ctx } from '../types/context'
import getErrorMessage from '../utils/getErrorMessage'

export default async function LoginHandler (
  req: Request,
  res: Response,
  ctx: Ctx
): Promise<void> {
  try {
    const { member } = req.locals
    const token = jwt.sign(
      { id: member.member_id },
      ctx.config.jwtSecret
    )

    res.status(200).json({
      message: 'Login success',
      error: '',
      token
    })
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: getErrorMessage(err)
    })
  }
}
