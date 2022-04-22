import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly supplierService: SuppliersService){

    }
    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.supplierService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.supplierService.findOne('' + id);
    }
    @Post()
    create(@Body() createSupplierDto: CreateSupplierDto){
        console.log(createSupplierDto instanceof CreateSupplierDto)
        return this.supplierService.create(createSupplierDto);
    }
    @Patch(':id')
    update(@Param('id') id:string, @Body() updateSupplierDto: UpdateSupplierDto){
        return this.supplierService.update(id, updateSupplierDto);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.supplierService.remove(id)
    }

}
