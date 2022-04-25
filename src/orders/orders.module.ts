import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Order])],
    controllers:[OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {}
