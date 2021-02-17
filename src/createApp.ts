import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

export const createApp = async (nestOptions?: NestApplicationOptions) => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    nestOptions,
  );

  const options = new DocumentBuilder()
    .setTitle('TTFM')
    .setDescription('Turntable Rooms Service')
    .addBearerAuth({ in: 'header', type: 'http' })
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  return app.useGlobalPipes(new ValidationPipe());
};
