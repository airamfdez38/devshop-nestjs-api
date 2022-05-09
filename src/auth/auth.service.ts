import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService{
    constructor(private usersService: UsersService, private jwtTokenService: JwtService){}

   async validateUserCredentials(email:string, password: string): Promise<any>{
       const user = await this.usersService.findByEmail(email);

       if(user && user.password === password){
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