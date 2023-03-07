import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createMemberSeed (): Promise<void> {
  await prisma.member.create({
    data: {
      email: 'NewEmail@gmail.com',
      password: 'NewPassword'
    }
  })
}

async function main (): Promise<void> {
  console.log('Start seeding ...')
  await createMemberSeed()
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
