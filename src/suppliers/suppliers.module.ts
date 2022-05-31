import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';
import { Event } from 'src/events/entities/event.entity';


@Module({//Used to organize application components.
    imports:[TypeOrmModule.forFeature([Supplier, Event]) ],
    controllers:[SuppliersController],
    providers: [SuppliersService],
    exports: [SuppliersService],
})
export class SuppliersModule {}
