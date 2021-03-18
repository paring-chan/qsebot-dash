import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'

@Controller('password')
export class PasswordController {
  @Get()
  @Render('password')
  root() {
    return {}
  }

  @Post()
  update(@Req() _req: Request, @Res() res: Response) {
    res.render('Index', {
      flash: '비밀번호가 변경되었습니다.',
    })
  }
}
