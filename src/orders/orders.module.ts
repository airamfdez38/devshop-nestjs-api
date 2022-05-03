import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Invoice } from '../invoices/entities/invoice.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Order, User, Invoice])],
    controllers:[OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {}
