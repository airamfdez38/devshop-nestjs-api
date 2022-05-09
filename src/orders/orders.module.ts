import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { Event } from 'src/events/entities/event.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Order,Event]), AuthModule],
    controllers:[OrdersController],
    providers: [OrdersService],
    exports: [OrdersService],
})
export class OrdersModule {}
