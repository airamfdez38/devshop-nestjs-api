import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
export class AddressesController {
    constructor(private readonly addressService: AddressesService){

    }
    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.addressService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.addressService.findOne('' + id);
    }
    @Post()
    create(@Body() createAddressDto: CreateAddressDto){
        console.log(createAddressDto instanceof CreateAddressDto)
        return this.addressService.create(createAddressDto);
    }
    @Patch(':id')
    update(@Param('id') id:string, @Body() updateAddressDto: UpdateAddressDto){
        return this.addressService.update(id, updateAddressDto);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.addressService.remove(id)
    }
}
