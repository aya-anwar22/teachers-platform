import { createServer, proxy } from 'aws-serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from 'src/app.module';

let cachedServer;

async function bootstrapServer() {
  if (!cachedServer) {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    await app.init();
    cachedServer = createServer(expressApp);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
