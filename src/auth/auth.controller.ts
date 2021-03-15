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

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Res() res: Response, @Req() req: Request) {
    res.cookie('token', this.authService.login(req.user as User))
  }

  @Get('login')
  @Render('login/Index')
  async loginRender() {
    return {}
  }
}
