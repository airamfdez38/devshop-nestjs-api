
import {  Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from "passport-local";
import { AccessTokenPayload } from '../dto/access-token-payload.dto';
import { User } from '../../users/entities/user.entity';
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private userService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }

    async validate(payload: AccessTokenPayload): Promise<User > {
        const { sub: id } = payload,
            user = await this.userService.findOne(id)
          

        if (!user ) {
            return user;
        
        } else {
            return null;
        }
    }
}