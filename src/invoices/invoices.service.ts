import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
    constructor(
        @InjectRepository(Invoice)
        private readonly invoiceRepository: Repository<Invoice>,
      ) {}
    
      findAll() {
        return this.invoiceRepository.find();
      }
    
      async findOne(id: string) {
        const invoice = await this.invoiceRepository.findOne(id);
        if (!invoice) {
          throw new NotFoundException(`Factura #${id} no encontrada`);
        }
        return invoice;
      }
    
      create(createInvoiceDto: CreateInvoiceDto) {
        const invoice = this.invoiceRepository.create(createInvoiceDto);
        return this.invoiceRepository.save(invoice);
      }
    
      async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
        const invoice = await this.invoiceRepository.preload({
          id: +id,
          ...updateInvoiceDto,
        });
        if (!invoice) {
          throw new NotFoundException(`Factura #${id} no encontrada`);
        }
        return this.invoiceRepository.save(invoice);
      }
    
      async remove(id: string) {
        const invoice = await this.findOne(id);
        return this.invoiceRepository.remove(invoice);
      }
}
