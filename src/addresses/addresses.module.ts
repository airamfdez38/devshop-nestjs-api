import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesController } from './addresses.controller';
import { Address } from './entities/address.entity';
import { AddressesService } from './addresses.service';
import { Event } from 'src/events/entities/event.entity';

@Module({ //Used to organize application components.
    imports:[TypeOrmModule.forFeature([Address, Event])],
    controllers:[AddressesController],
    providers: [AddressesService],
    exports: [AddressesService],
    
})
export class AddressesModule {}
