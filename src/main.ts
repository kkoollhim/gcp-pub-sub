import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  aawait app.listen(process.env.PORT || 3001);
}
bootstrap();
