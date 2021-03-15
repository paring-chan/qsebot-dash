import { Injectable } from '@nestjs/common'
import knex from '@utils/knex'

export type User = {
  id: string
  password: string
}

@Injectable()
export class UsersService {
  async getUser(id: string): Promise<User | undefined> {
    return (await knex('users').limit(1).where({ id }))[0]
  }
}
