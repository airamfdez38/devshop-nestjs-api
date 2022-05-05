import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { Product } from '../products/entities/product.entity';
import { Event } from 'src/events/entities/event.entity';

@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Supplier, Product, Event])],
    controllers:[SuppliersController],
    providers: [
        {
            provide: SuppliersService,
            useClass: SuppliersService,
        }
    ]
})
export class SuppliersModule {}
