import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class SuppliersService {// SuppliersService will be responsible for data storage and retieval.
    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
      ) {}
      // Interactions with data sources
      
      findAll(paginationQuery: PaginationQueryDto) {
        const {limit, offset} =paginationQuery;
        return this.supplierRepository.find({
          relations:['product'],
          skip: offset,
          take: limit,
        });
      }
    
      async findOne(id: string) {
        const supplier = await this.supplierRepository.findOne(id,{
          relations: ['product']
        }
          );
        if (!supplier) {
          throw new NotFoundException(`Proveedor #${id} no encontrado`);// Exception when the supplier doesn't exist in data source
        }
        return supplier;
      }
    
      create(createSupplierDto: CreateSupplierDto) {
        const supplier = this.supplierRepository.create(createSupplierDto);
        return this.supplierRepository.save(supplier);
      }
    
      async update(id: string, updateSupplierDto: UpdateSupplierDto) {
        const supplier = await this.supplierRepository.preload({
          id: +id,
          ...updateSupplierDto,
        });
        if (!supplier) {
          throw new NotFoundException(`Proveedor #${id} no encontrado`);// Preload updates an existing entity. If not exists throws an exception
        }
        return this.supplierRepository.save(supplier);
      }
    
      async remove(id: string) {
        const supplier = await this.findOne(id);
        return this.supplierRepository.remove(supplier);
      }
}
