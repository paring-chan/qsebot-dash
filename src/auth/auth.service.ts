import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(id)
    if (!user) return null
    const compared = await bcrypt.compare(user.password, password)
    if (!compared) return
    return user
  }
}
