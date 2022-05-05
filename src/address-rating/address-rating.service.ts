import { Injectable } from '@nestjs/common';
import { AddressesService } from '../addresses/addresses.service';

@Injectable()
export class AddressRatingService {
    constructor(private readonly addressesService: AddressesService){}
}
