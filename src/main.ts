import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 8000;
  console.log(`app running on port ${port}`);

  const apiPath = 'api';
  app.setGlobalPrefix(apiPath);

  app.use(cookieParser());

  const options = new DocumentBuilder()
    .setTitle('E-Learning Plateform')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addServer(`http://localhost:${port}/`, 'Local environment')
    // .addServer('https://staging.yourapi.com/', 'Staging')
    // .addServer('https://production.yourapi.com/', 'Production')
    .addTag('Your API Tag')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
