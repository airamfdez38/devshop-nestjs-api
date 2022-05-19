import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../auth/auth.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { SuppliersService } from './suppliers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Suppliers')
@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly supplierService: SuppliersService, private authService: AuthService){

    }
    //GET HTTP handler using a Nest decorator

    @Get()
    // Request that will be used to fetch all the results for this controller

    findAll(@Query() paginationQuery:PaginationQueryDto){
        //const {limit, offset} = paginationQuery;
        return this.supplierService.findAll(paginationQuery);
    }
    @Get(':id')
     /* Request that returns a result by its id.
    The @Param lets grab all incoming request parameters and use them 
    inside of the function body.*/
    findOne(@Param('id') id: string){
        return this.supplierService.findOne( id);
    }
    @Post()
    // Body decorator as parameter for getting all or specific portion of the request

    create(@Body() createSupplierDto: CreateSupplierDto){
        console.log(createSupplierDto instanceof CreateSupplierDto)
        return this.supplierService.create(createSupplierDto);
    }
    // Method to modify datas partially

    @Patch()
    /* Needs of Param decorator that receives as parameter the product's id
    and the Body parameter that is going to be the request body */
    update( @Body() updateSupplierDto: CreateSupplierDto){
        return this.supplierService.update( updateSupplierDto);
    }
    // Method to remove a supplier by its id

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.supplierService.remove(id)
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.loginWithCredentials(req.user);
    }

}
