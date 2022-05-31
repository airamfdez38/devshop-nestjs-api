
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './service/authentication.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JWTGuard } from './guards/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: "" + process.env.JWT_SECRET,
      signOptions: { expiresIn: '5m' }
    })
  ],
  providers: [ AuthenticationService, JwtStrategy,   JWTGuard, UsersService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule { }
