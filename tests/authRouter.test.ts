import request from './index'
import getRandomString from '../src/utils/getRandomString'

describe('authRouter Test', () => {
  const email = `${getRandomString(15)}@gmail.com`
  const password = 'this_is_my_password'

  it('should createMember', async () => {
    const response = await request.post('/api/auth/createMember').send({
      email,
      password
    })
    expect(response.status).toBe(200)
  })

  it('should Login', async () => {
    const response = await request.post('/api/auth/login').send({
      email,
      password
    })
    expect(response.status).toBe(200)
  })
})
