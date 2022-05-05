import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Supplier } from '../suppliers/entities/supplier.entity';
import { Event } from '../events/entities/event.entity';

class MockProductsService{}
@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Product, Order, Supplier, Event])],
    controllers:[ProductsController],
    providers: [
        {
            provide: ProductsService,
            useValue: new MockProductsService(),
        }
    ], exports: [ProductsService],
})
export class ProductsModule {}
