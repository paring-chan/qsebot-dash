import { Controller, Get, Render } from '@nestjs/common'

@Controller('password')
export class PasswordController {
  @Get()
  @Render('password')
  root() {
    return {}
  }
}
