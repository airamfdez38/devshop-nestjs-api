import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Order } from '../orders/entities/order.entity';

@Module({ //Used to organize application components.
    imports:[TypeOrmModule.forFeature([Invoice, Order])],
    controllers:[InvoicesController],
    providers: [InvoicesService]
})
export class InvoicesModule {}
