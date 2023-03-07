import { CreateMemberRequestWithLocal } from './../validations/createMember.validation'
import { Response } from 'express'
import { Ctx } from '../types/context'
import hashString from '../utils/hashString'
import getErrorMessage from '../utils/getErrorMessage'

export default async function createMemberHandler (
  req: CreateMemberRequestWithLocal,
  res: Response,
  ctx: Ctx
): Promise<void> {
  try {
    const { prisma } = ctx
    const { email, password } = req.locals.createMemberData

    await prisma.member.create({
      data: {
        email,
        password: hashString(password)
      }
    })

    res.status(200).json({
      message: 'Member created',
      error: ''
    })
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: getErrorMessage(err)
    })
  }
}
