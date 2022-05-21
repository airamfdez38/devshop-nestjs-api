import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {// SuppliersService will be responsible for data storage and retieval.
    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
      ) {}
      // Interactions with data sources
      
      findAll() {
        return this.supplierRepository.find({
          relations:['product'],
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
    
      async update(updateSupplierDto: CreateSupplierDto) {
       
        return this.supplierRepository.save(updateSupplierDto);
      }
    
      async remove(id: string) {
        const supplier = await this.findOne(id);
        return this.supplierRepository.remove(supplier);
      }
     /* async recommendSupplier(supplier: Supplier) {
        const queryRunner = this.connection.createQueryRunner();
        
        await queryRunner.connect();
        await queryRunner.startTransaction(); 
        try {
          supplier.recommendations++;
          
          const recommendEvent = new Event();
          recommendEvent.name = 'recommend_supplier';
          recommendEvent.type = 'supplier';
          recommendEvent.payload = { supplierId: supplier.id };
        
          await queryRunner.manager.save(supplier); 
          await queryRunner.manager.save(recommendEvent);
          
          await queryRunner.commitTransaction();
        } catch (err) {
          await queryRunner.rollbackTransaction();
        } finally {
          await queryRunner.release();
        }
    
      }
      */
}
