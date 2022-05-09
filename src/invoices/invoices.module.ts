import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Event } from '../events/entities/event.entity';
import { AuthModule } from 'src/auth/auth.module';
@Module({ //Used to organize application components.
    imports:[TypeOrmModule.forFeature([Invoice, Event]), AuthModule],
    controllers:[InvoicesController],
    providers: [InvoicesService],
    exports: [InvoicesService],
})
export class InvoicesModule {}
