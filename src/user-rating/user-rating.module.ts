import { Module } from '@nestjs/common';
import { UserRatingService } from './user-rating.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [UserRatingService]
})
export class UserRatingModule {}
