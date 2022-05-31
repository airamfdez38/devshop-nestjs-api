import { LoginDto } from "./../dto/login.dto";
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthenticationService } from "../service/authentication.service";

import { IAccessToken } from "src/core/interface/access-token.interface";
import { User } from "src/users/entities/user.entity";

export interface AuthenticationPayload {
  user: User;
  payload: {
    type: string;
    token: string;
    refresh_token?: string;
  };
}

@ApiTags("Auth")
@Controller("authentication")
// @UseFilters(HttpExceptionFilter)
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,

  ) { }

  @HttpCode(200)
  @Post('/login')
  async login(@Body() user: LoginDto): Promise<IAccessToken> {
    const valid = await this.authService.validateLoginUser(user);
    if (!valid) throw new UnauthorizedException("Credenciales inválidas");
    return await this.authService.generateAccessToken(user.email);
  }

  

  /*@Post('/register')
  public async register(@Body() customer: CreateCustomerDto) {
    const user = await this.customerService.create(customer),
      token = await this.tokenService.generateAccessToken(user),
      refresh = await this.tokenService.generateRefreshToken(user, 60 * 60 * 24 * 30),
      payload = this.buildResponsePayload(user, token, refresh);

    return {
      status: 'success',
      data: payload,
    }
  }*/

  

  /*@Post("reset-password")
  resetPassword(
    @Body() resetPasswordRequest: ResetPasswordRequest
  ): Promise<SuccessHttpResponse> {
    return this.authService.resetPassword(resetPasswordRequest);
  }*/
}
