import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoiceService: InvoicesService){

    }
    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.invoiceService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.invoiceService.findOne('' + id);
    }
    @Post()
    create(@Body() createInvoiceDto: CreateInvoiceDto){
        console.log(createInvoiceDto instanceof CreateInvoiceDto)
        return this.invoiceService.create(createInvoiceDto);
    }
    @Patch(':id')
    update(@Param('id') id:string, @Body() updatenvoiceDto: UpdateInvoiceDto){
        return this.invoiceService.update(id, updatenvoiceDto);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.invoiceService.remove(id)
    }
}
