import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { LocalStrategy } from './local.strategy'

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule],
})
export class AuthModule {}
