import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import * as cripto from 'bcrypt';

@Injectable()
export class AuthService{
    constructor(private usersService: UsersService, private jwtTokenService: JwtService){}

   async validateUserCredentials(email:string, password: string): Promise<any>{
       const user = await this.usersService.findByEmail(email);
    const encryptedPass = cripto.createHmac('sha256', password).digest('hex')
       if(user && user.password === encryptedPass){
           const {password, ...result} = user;
           return result;
       }
       return null;
       
   }
   async loginWithCredentials(user: any){
       const payload = {username: user.username, sub: user.userId}

       return{
           access_token: this.jwtTokenService.sign(payload),
       }
   }
}