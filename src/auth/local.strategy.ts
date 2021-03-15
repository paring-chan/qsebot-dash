import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from './auth.service'
import knex from '@utils/knex'
import bcrypt from 'bcrypt'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'id',
      passwordField: 'password',
    })
  }

  async validate(id: string, password: string): Promise<any> {
    if (!(await knex('users').limit(1))[0]) {
      const pw = await bcrypt.hash(password, 10)
      await knex('users').insert({
        password: pw,
        id,
      })
    }
    const user = await this.authService.validateUser(id, password)
    if (!user) throw new UnauthorizedException()
    return user
  }
}
