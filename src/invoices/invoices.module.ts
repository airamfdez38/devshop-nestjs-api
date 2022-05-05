import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Order } from '../orders/entities/order.entity';
import { Event } from '../events/entities/event.entity';

class MockInvoicesService{}
@Module({ //Used to organize application components.
    imports:[TypeOrmModule.forFeature([Invoice, Order, Event])],
    controllers:[InvoicesController],
    providers: [
        {
            provide: InvoicesService,
            useValue: new MockInvoicesService(),
        }
    ],
    exports: [InvoicesService],
})
export class InvoicesModule {}
