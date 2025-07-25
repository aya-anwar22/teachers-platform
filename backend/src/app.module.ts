import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsModule } from './bookings/bookings.module';
import { StageModule } from './stages/stage.module';
import { GradesModule } from './grades/grades.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'; // ✅ ضيفي دي
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://mohamedanwar5100:8vLVl4GT3QHVVBXj@cluster0.rswxp3c.mongodb.net'),
    BookingsModule,
    StageModule,
    GradesModule,
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'MY_SUPER_SECRET_KEY',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
