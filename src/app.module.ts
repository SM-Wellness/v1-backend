import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/prisma';
import { JwtModule } from '@app/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`environments/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    AuthenticationModule,
    UsersModule,
    PrismaModule,
    JwtModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
