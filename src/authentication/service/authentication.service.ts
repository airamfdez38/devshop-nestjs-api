import {  Injectable,  } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as crypto from "crypto";
import { LoginDto } from '../dto/login.dto';

import { compare } from 'bcrypt'

import { User } from 'src/users/entities/user.entity';
import { UsersService } from "src/users/users.service";
import { IAccessToken } from "src/core/interface/access-token.interface";
import { IPayload } from "src/core/interface/payload.interface";
import { addHours, format } from "date-fns";


@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) { }


  public async validateCredentials(user: User , password: string): Promise<boolean> {
    return compare(password, user.password);
  }


  async validateUser(userEmail: string): Promise<User> {
    return await this.userService.findByEmail(userEmail);
  }

  async validateLoginUser(userCredentials: LoginDto): Promise<boolean> {
    let user: User  = await this.userService.findByEmail(userCredentials.email);
     return await this.validatePassword(userCredentials.password, user?.password);
  }
 
  async validatePassword(loginPassword: string, userPassword: string): Promise<boolean> {
    const hashedPassword = crypto.createHmac('sha256', loginPassword).digest('hex');
    return hashedPassword === userPassword;
  }

  async generateAccessToken(userEmail: string): Promise<IAccessToken> {
    const now = new Date();
    const twoHoursExpiration = format(addHours(now, 2),'t');
    const user = await this.userService.findByEmail(userEmail),
      payload: IPayload = { user: user, expiration: twoHoursExpiration };
    delete user.password;
    return { accessToken: this.jwtService.sign(payload) };
  }
  
  /*async registerUser(user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }*/

 


  
}
