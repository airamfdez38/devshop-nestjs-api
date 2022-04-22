import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService){

    }
    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.orderService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.orderService.findOne('' + id);
    }
    @Post()
    create(@Body() createOrderDto: CreateOrderDto){
        console.log(createOrderDto instanceof CreateOrderDto)
        return this.orderService.create(createOrderDto);
    }
    @Patch(':id')
    update(@Param('id') id:string, @Body() updateOrderDto: UpdateOrderDto){
        return this.orderService.update(id, updateOrderDto);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.orderService.remove(id)
    }
}
