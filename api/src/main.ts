import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import * as passport from 'passport';
import * as session from 'express-session';

const port: number = Number(process.env.PORT) as number;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
  });
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: Boolean(process.env.SESSION_RESAVE),
      saveUninitialized: Boolean(process.env.SESSION_SAVE_UNINITIALIZED),
      cookie: { maxAge: 86_400_000, secure: false, sameSite: 'strict' }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints[Object.keys(error.constraints)[0]]
        }));
        return new BadRequestException(result);
      }
    })
  );
  await app.listen(port);
}

bootstrap();
