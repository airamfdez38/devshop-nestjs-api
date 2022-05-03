import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesController } from './addresses.controller';
import { Address } from './entities/address.entity';
import { AddressesService } from './addresses.service';
import { User } from '../users/entities/user.entity';

@Module({ //Used to organize application components.
    imports:[TypeOrmModule.forFeature([Address, User])],
    controllers:[AddressesController],
    providers: [AddressesService]
})
export class AddressesModule {}
