const db = require('./db')
const { User } = require('./models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const thomas = await User.create({
    first_name: 'thomas',
    last_name: 'john',
    email: 'thomas@email.com',
    password: '123456',
  })

  const santiago = await User.create({
    first_name: 'tommy',
    last_name: 'john',
    email: 'tommy@email.com',
    password: '123456',
  })

  console.log(`seeded users`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}
