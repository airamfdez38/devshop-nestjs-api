import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoicesService } from './invoices.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoiceService: InvoicesService, ){

    }
     //GET HTTP handler using a Nest decorator
    @Get()
    // Request that will be used to fetch all the results for this controller
    findAll(){
        return this.invoiceService.findAll();
    }
    @Get(':id')
     /* Request that returns a result by its id.
    The @Param lets grab all incoming request parameters and use them 
    inside of the function body.*/
    findOne(@Param('id') id: string){
        return this.invoiceService.findOne(id);
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
  
}
