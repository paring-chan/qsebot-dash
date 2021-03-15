import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): any {
    if (!req.path.startsWith('/auth') && !req.user) {
      return res.redirect('/auth/login')
    }
    next()
  }
}
