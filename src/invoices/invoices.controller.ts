import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../auth/auth.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoicesService } from './invoices.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoiceService: InvoicesService, private authService: AuthService){

    }
     //GET HTTP handler using a Nest decorator
    @Get()
    // Request that will be used to fetch all the results for this controller
    findAll(@Query() paginationQuery:PaginationQueryDto){
        //const {limit, offset} = paginationQuery;
        return this.invoiceService.findAll(paginationQuery);
    }
    @Get(':id')
     /* Request that returns a result by its id.
    The @Param lets grab all incoming request parameters and use them 
    inside of the function body.*/
    findOne(@Param('id') id: number){
        return this.invoiceService.findOne('' + id);
    }
    @Post()
    // Body decorator as parameter for getting all or specific portion of the request
    create(@Body() createInvoiceDto: CreateInvoiceDto){
        console.log(createInvoiceDto instanceof CreateInvoiceDto)
        return this.invoiceService.create(createInvoiceDto);
    }
    // Method to modify datas partially
    @Patch()
    /* Needs of Param decorator that receives as parameter the product's id
       and the Body parameter that is going to be the request body */
    update( @Body() updateInvoiceDto: CreateInvoiceDto){
        return this.invoiceService.update( updateInvoiceDto);
    }
    // Method to remove a product by its id
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.invoiceService.remove(id)
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.loginWithCredentials(req.user);
    }
}
