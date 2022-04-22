import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
      ) {}
    
      findAll() {
        return this.supplierRepository.find();
      }
    
      async findOne(id: string) {
        const supplier = await this.supplierRepository.findOne(id);
        if (!supplier) {
          throw new NotFoundException(`Proveedor #${id} no encontrado`);
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
          throw new NotFoundException(`Proveedor #${id} no encontrado`);
        }
        return this.supplierRepository.save(supplier);
      }
    
      async remove(id: string) {
        const supplier = await this.findOne(id);
        return this.supplierRepository.remove(supplier);
      }
}
