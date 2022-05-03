import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Address } from '../addresses/entities/address.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([User, Order, Address])],
    controllers:[UsersController],
    providers: [UsersService]
})
export class UsersModule {}
