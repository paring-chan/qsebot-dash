import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RenderModule } from 'nest-next'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import Next from 'next'
import { APP_GUARD } from '@nestjs/core'
import { JwtGuard } from './auth/jwt.guard'
import { PasswordModule } from './password/password.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    AuthModule,
    UsersModule,
    PasswordModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
