import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000 //process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  });
  await app.listen(port);

  Logger.log('KFL app running on localhost:${port}', 'Bootstrap');
}
bootstrap();


