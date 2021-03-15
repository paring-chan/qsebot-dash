import { Injectable } from '@nestjs/common'
import { User, UsersService } from '../users/users.service'
import bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import knex from '@utils/knex'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string, password: string): Promise<any> {
    let user = await this.usersService.getUser(id)
    if (!(await knex('users').limit(1))[0]) {
      const pw = await bcrypt.hash(password, 10)
      await knex('users').insert({
        password: pw,
        id,
      })
      user = {
        id,
        password: pw,
      }
    }
    if (!user) return null
    const compared = await bcrypt.compare(user.password, password)
    if (!compared) return
    return user
  }

  async login(user: User) {
    const payload = { id: user.id }
    return this.jwtService.sign(payload)
  }
}
