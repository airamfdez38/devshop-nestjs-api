import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {// InvoicesService will be responsible for data storage and retieval.
    constructor(
        @InjectRepository(Invoice)
        private readonly invoiceRepository: Repository<Invoice>,
      ) {}
      // Interactions with data sources
      
      findAll(paginationQuery: PaginationQueryDto) {//Pagination helps us divide into consumable segment of information
        const {limit, offset} =paginationQuery;

        return this.invoiceRepository.find({
          relations: ['order'],
          skip: offset,// offset is the number of records we want to skip before selecting records.
          take: limit,//Limit is the number of records we want to take after skipping is done.
        }
        );
      }
    
      async findOne(id: string) {
        const invoice = await this.invoiceRepository.findOne(id, {
          relations: ['order']
        });
        if (!invoice) {
          throw new NotFoundException(`Factura #${id} no encontrada`); // Exception when the invoice doesn't exist in data source
        }
        return invoice;
      }
    
      create(createInvoiceDto: CreateInvoiceDto) {
        const invoice = this.invoiceRepository.create(createInvoiceDto);
        return this.invoiceRepository.save(invoice);
      }
    
      async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
        const invoice = await this.invoiceRepository.preload({// Preload updates an existing entity. If not exists throws an exception
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
