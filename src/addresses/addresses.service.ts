import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
      ) {}
    
      findAll() {
        return this.addressRepository.find();
      }
    
      async findOne(id: string) {
        const address = await this.addressRepository.findOne(id);
        if (!address) {
          throw new NotFoundException(`Dirección #${id} no encontrada`);
        }
        return address;
      }
    
      create(createAddressDto: CreateAddressDto) {
        const address = this.addressRepository.create(createAddressDto);
        return this.addressRepository.save(address);
      }
    
      async update(id: string, updateAddressDto: UpdateAddressDto) {
        const address = await this.addressRepository.preload({
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
}
