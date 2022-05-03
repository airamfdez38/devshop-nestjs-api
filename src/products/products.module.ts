import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Supplier } from '../suppliers/entities/supplier.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Product, Order, Supplier])],
    controllers:[ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
