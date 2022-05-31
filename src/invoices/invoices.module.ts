import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Event } from '../events/entities/event.entity';

@Module({ //Used to organize application components.
    imports:[TypeOrmModule.forFeature([Invoice, Event])],
    controllers:[InvoicesController],
    providers: [InvoicesService]
})
export class InvoicesModule {}
