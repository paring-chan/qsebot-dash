import { Injectable } from '@nestjs/common'

type User = {
  id: string
  password: string
}

@Injectable()
export class UsersService {}
