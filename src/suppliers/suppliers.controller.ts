import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly supplierService: SuppliersService){

    }
    //GET HTTP handler using a Nest decorator

    @Get()
    // Request that will be used to fetch all the results for this controller

    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.supplierService.findAll();
    }
    @Get(':id')
     /* Request that returns a result by its id.
    The @Param lets grab all incoming request parameters and use them 
    inside of the function body.*/
    findOne(@Param('id') id: number){
        return this.supplierService.findOne('' + id);
    }
    @Post()
    // Body decorator as parameter for getting all or specific portion of the request

    create(@Body() createSupplierDto: CreateSupplierDto){
        console.log(createSupplierDto instanceof CreateSupplierDto)
        return this.supplierService.create(createSupplierDto);
    }
    // Method to modify datas partially

    @Patch(':id')
    /* Needs of Param decorator that receives as parameter the product's id
    and the Body parameter that is going to be the request body */
    update(@Param('id') id:string, @Body() updateSupplierDto: UpdateSupplierDto){
        return this.supplierService.update(id, updateSupplierDto);
    }
    // Method to remove a supplier by its id

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.supplierService.remove(id)
    }

}
