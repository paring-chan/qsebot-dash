import { Module } from '@nestjs/common'
import { PasswordController } from './password.controller'
import { UsersModule } from '../users/users.module'

@Module({
  controllers: [PasswordController],
  imports: [UsersModule],
})
export class PasswordModule {}
