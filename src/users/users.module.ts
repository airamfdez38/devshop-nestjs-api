import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import {Event} from '../events/entities/event.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([User,Event])],
    controllers:[UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
