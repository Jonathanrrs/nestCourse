import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:
        true /* remover campos que vienen en la body de la respuesta que no queremos */,
      forbidNonWhitelisted:
        true /* este regresa el campo que estas mandando de mas y lo avisa */,
    }),
  );
  await app.listen(3000);
}
bootstrap();
