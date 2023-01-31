import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import documentBuilder from '@app/config/document-builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  documentBuilder({
    app,
    title: 'Social Bio Swagger',
    description: 'Social Bio Backend API Document',
  });

  await app.listen(3000);
}
bootstrap();
