import { Controller, Get, Render } from '@nestjs/common'
import knex from '@utils/knex'

@Controller('accounts')
export class AccountsController {
  @Get()
  @Render('accounts')
  async accounts() {
    return {
      accounts: await knex('users').select('id'),
    }
  }

  @Get('add')
  @Render('addAccount')
  addAccount() {
    return {}
  }
}
