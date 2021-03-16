import { AuthGuard } from '@nestjs/passport'
import { SetMetadata } from '@nestjs/common'

export class JwtGuard extends AuthGuard(['jwt']) {}

export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
