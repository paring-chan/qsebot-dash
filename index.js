require('dotenv/config')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const mongoose = require("mongoose")

const models = require('./models')

const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const run = async () => {
  const conn = await mongoose.connect(process.env.DB)

  const adminBro = new AdminBro({
    databases: [conn],
    rootPath: '/',
    resources: [
      {
        resource: models.problem,
      }
    ],
  })

  const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate(email, password) {
    },
    cookieName: 'auth',
    cookiePassword: require('crypto').randomBytes(128).toString()
  })

  const app = require('express')()

  app.use(adminBro.options.rootPath, router)
  app.listen(process.env.PORT)
}

run()
