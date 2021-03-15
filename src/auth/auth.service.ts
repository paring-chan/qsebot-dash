import { Injectable } from '@nestjs/common'
import { User, UsersService } from '../users/users.service'
import bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(id)
    if (!user) return null
    const compared = await bcrypt.compare(password, user.password)
    if (!compared) return
    return user
  }

  async login(user: User) {
    const payload = { id: user.id }
    return this.jwtService.sign(payload)
  }
}
