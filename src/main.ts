import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { UnauthorizedFilter } from './auth/unauthorized.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new UnauthorizedFilter())
  await app.listen(3000)
}
bootstrap()
