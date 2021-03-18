import { Controller, Get, Render, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller()
export class AppController {
  @Render('Index')
  @Get()
  home() {
    return {}
  }

  @Get('api/user')
  user(@Req() req: Request) {
    return req.user || null
  }
}
