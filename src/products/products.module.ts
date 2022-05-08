import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Event } from '../events/entities/event.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Product, Event])],
    controllers:[ProductsController],
    providers: [ProductsService],
    exports: [ProductsService],
})
export class ProductsModule {}
