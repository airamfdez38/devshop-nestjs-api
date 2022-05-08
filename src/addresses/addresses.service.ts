import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entity';
@Injectable()
export class AddressesService { // AddressesService will be responsible for data storage and retieval.
    constructor(
      @InjectRepository(Address)
      private readonly addressRepository: Repository<Address>,
    ) {}
    
    // Interactions with data sources
    findAll(paginationQuery: PaginationQueryDto) {//Pagination helps us divide into consumable segment of information
      const {limit, offset} = paginationQuery;
      return this.addressRepository.find({
        relations: ['user'],
        skip: offset,// offset is the number of records we want to skip before selecting records.
        take: limit,//Limit is the number of records we want to take after skipping is done.
      });
    }
  
    async findOne(id: string) {
      const address = await this.addressRepository.findOne(id, {
        relations: ['address']
      });
      if (!address) {
        throw new NotFoundException(`Dirección #${id} no encontrada`); // Exception when the address doesn't exist in data source
      }
      return address;
    }
  
    create(createAddressDto: CreateAddressDto) { 
      const address = this.addressRepository.create(createAddressDto);
      return this.addressRepository.save(address);
    }
  
    async update(id: string, updateAddressDto: UpdateAddressDto) {
      const address = await this.addressRepository.preload({// Preload updates an existing entity. If not exists throws an exception
        id: +id,
        ...updateAddressDto,
      });
      if (!address) {
        throw new NotFoundException(`Dirección #${id} no encontrada`);
      }
      return this.addressRepository.save(address);
    }
  
    async remove(id: string) {
      const address = await this.findOne(id);
      return this.addressRepository.remove(address);
    }
   /* async recommendAddress(address: Address) {
      const queryRunner = this.connection.createQueryRunner();
      
      await queryRunner.connect();
      await queryRunner.startTransaction(); 
      try {
        address.recommendations++;
        
        const recommendEvent = new Event();
        recommendEvent.name = 'recommend_address';
        recommendEvent.type = 'address';
        recommendEvent.payload = { addressId: address.id };
      
        await queryRunner.manager.save(address); 
        await queryRunner.manager.save(recommendEvent);
        
        await queryRunner.commitTransaction();
      } catch (err) {
        await queryRunner.rollbackTransaction();
      } finally {
        await queryRunner.release();
      }
    }*/
}
