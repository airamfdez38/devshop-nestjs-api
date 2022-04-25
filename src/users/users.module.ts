import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UsersController],
    providers: [UsersService]
})
export class UsersModule {}
