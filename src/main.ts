import * as compression from 'compression';
import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/http-exception.filter';
import { HttpResponseInterceptor } from './shared/interceptors';
import { configSwagger } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(compression());
  app.enableCors();
  app.enableVersioning();

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new HttpResponseInterceptor());

  app.setGlobalPrefix(AppModule.apiPrefix);
  configSwagger(app, AppModule.apiVersion);
  await app.listen(AppModule.port);
  return AppModule;
}

bootstrap().then((appModule) => {
  Logger.log(
    `Application running on url: http://localhost:${appModule.port}${appModule.apiPrefix}/v${appModule.apiVersion}`,
    'Main',
  );
  Logger.log(
    `Swagger App running on url: http://localhost:8080/api/v1/swagger`,
    'Main',
  );
});
