require('dotenv/config')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const passwordFeature = require('@admin-bro/passwords')

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
      },
      {
        resource: models.admin,
        features: [passwordFeature({
          properties: {
            encryptedPassword: 'password'
          },
          hash: pw => bcrypt.hash(pw, 10),
        })]
      },
      {
        resource: models.counter,
        options: {
          properties: { count: { isVisible: false } },
        },
      }
    ],
  })

  const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    async authenticate(email, password) {
      if (!(await models.admin.find()).length) {
        const admin = new models.admin()
        admin.email = email
        admin.password = await bcrypt.hash(password, 10)
        await admin.save()
      }
      /**
       * @type {*}
       */
      const user = await models.admin.findOne({
        email,
      })
      if (!user) return null
      if (!await bcrypt.compare(password, user.password)) {
        return null
      }
      return {
        email: user.email,
        avatarUrl: gravatar.url(user.email)
      }
    },
    cookieName: 'auth',
    cookiePassword: require('crypto').randomBytes(128).toString()
  })

  const app = require('express')()

  app.use(adminBro.options.rootPath, router)
  app.listen(process.env.PORT)
}

run()
