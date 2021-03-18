import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { UsersService } from '../users/users.service'
import bcrypt from 'bcrypt'
import knex from '@utils/knex'

@Controller('password')
export class PasswordController {
  constructor(private userService: UsersService) {}

  @Get()
  @Render('password')
  root() {
    return {}
  }

  @Post()
  async update(@Req() req: Request, @Res() res: Response) {
    const user = await this.userService.getUser((req.user as any).id)
    if (!user) return res.redirect('/')
    const { currentPassword, newPassword, newPasswordConfirm } = req.body
    if (!(await bcrypt.compare(currentPassword, user.password))) {
      return res.render('password', {
        flash: '현재 비밀번호가 일치하지 않습니다',
      })
    }
    if (newPassword !== newPasswordConfirm) {
      return res.render('password', {
        flash: '새 비밀번호가 일치하지 않습니다.',
      })
    }
    await knex('users').update({
      password: await bcrypt.hash(newPassword, 10),
    })
    res.render('Index', {
      flash: '비밀번호가 변경되었습니다.',
    })
  }
}
