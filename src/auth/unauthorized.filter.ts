import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common'
import { Response } from 'express'

@Catch(UnauthorizedException)
export class UnauthorizedFilter implements ExceptionFilter {
  catch(_exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse<Response>()
    res.status(401).redirect('/login')
  }
}
