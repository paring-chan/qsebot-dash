const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const express = require('express')
const app = express()

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/',
})

const router = AdminBroExpress.buildRouter(adminBro)

const app = require('express')()

app.use(adminBro.options.rootPath, router)
app.listen(process.env.PORT)
