import { Module } from '@nestjs/common';
import { AddressRatingService } from './address-rating.service';
import { AddressesModule } from '../addresses/addresses.module';

@Module({
  imports: [AddressesModule],
  providers: [AddressRatingService]
})
export class AddressRatingModule {}
