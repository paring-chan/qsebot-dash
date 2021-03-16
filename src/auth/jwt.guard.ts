import { AuthGuard } from '@nestjs/passport'
import { ExecutionContext, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'

export class JwtGuard extends AuthGuard(['jwt']) {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if (isPublic) {
      return true
    }
    return super.canActivate(context)
  }
}

export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
