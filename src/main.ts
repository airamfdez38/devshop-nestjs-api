import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule),
  config = new DocumentBuilder()
      .setTitle('Devshop API')
      .setDescription('Devshop API for CRUD Actions')
      .setVersion('1.0')
      .build(),
    document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,//With this option we no longer have to specify with types decorator 
      },
    }
  ));
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
