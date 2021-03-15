import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, _: Response, next: () => void): any {
    console.log(req.path)
    // if (!req.path.startsWith('/auth/') && !req.user) {
    //   return res.redirect('/auth/login')
    // }
    next()
  }
}
