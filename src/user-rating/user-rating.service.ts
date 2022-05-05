import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class UserRatingService {
    constructor( private readonly usersService: UsersService){}
}
