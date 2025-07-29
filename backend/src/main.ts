// import { NestFactory } from '@nestjs/core';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import { ValidationPipe } from '@nestjs/common';
// import * as express from 'express';
// import { AppModule } from './app.module';

// const server = express();

// let cachedServer;

// export default async function handler(req, res) {
//   if (!cachedServer) {
//     const app = await NestFactory.create(AppModule, new ExpressAdapter(server));



//     app.useGlobalPipes(
//       new ValidationPipe({
//         transform: true,
//         whitelist: true,
//         forbidNonWhitelisted: true,
//       }),
//     );

//     app.enableCors({
//       origin: '*',
//       methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//       credentials: false,
//     });

//     await app.init();
//     cachedServer = server;
//   }
//   return cachedServer(req, res);
// }

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { AppModule } from './app.module';

const server = express();

let cachedServer;

// ✅ Vercel handler
export default async function handler(req, res) {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: false,
    });

    await app.init();
    cachedServer = server;
  }
  return cachedServer(req, res);
}

// ✅ Local bootstrap
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });

  await app.listen(3000);
  console.log('🚀 Local server running on http://localhost:3000');
}

// ✅ شغّله محلي لو مش في production
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}
