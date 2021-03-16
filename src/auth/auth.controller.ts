import {
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { User } from '../users/users.service'
import knex from '@utils/knex'
import { Public } from './jwt.guard'
import { JwtService } from '@nestjs/jwt'
import cookie from 'cookie'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Public()
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Res() res: Response, @Req() req: Request) {
    res.cookie('token', await this.authService.login(req.user as User))
    res.redirect('/')
  }

  @Public()
  @Get('login')
  @Render('login/Index')
  async loginRender(@Req() req: Request, @Res() res: Response) {
    try {
      const cookies = cookie.parse(req.headers.cookie || '')
      await this.jwtService.verifyAsync(cookies.token)
    } catch {
      const userExists = !!(await knex('users').limit(1))[0]
      res.json({
        firstRun: !userExists,
      })
    }
    res.redirect('/')
  }
}
