import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { IncomingMessage } from 'http'
import cookie from 'cookie'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req: IncomingMessage) => {
        const cookies = cookie.parse(req.headers.cookie || '')
        return cookies['token']
      },
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: any) {
    return { id: payload.id }
  }
}
