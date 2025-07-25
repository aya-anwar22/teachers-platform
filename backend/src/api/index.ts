import { Handler } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { createServer, proxy } from 'aws-serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return createServer(expressApp);
}

export const handler: Handler = async (event, context) => {
  if (!server) {
    server = await bootstrap();
  }
  return proxy(server, event, context, 'PROMISE').promise;
};
