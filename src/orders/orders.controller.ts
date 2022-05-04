import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService){

    }
    //GET HTTP handler using a Nest decorator
    @Get()
    // Request that will be used to fetch all the results for this controller

    findAll(@Query() paginationQuery:PaginationQueryDto){
        //const {limit, offset} = paginationQuery;
        return this.orderService.findAll(paginationQuery);
    }
    @Get(':id')
    /* Request that returns a result by its id.
    The @Param lets grab all incoming request parameters and use them 
    inside of the function body.*/
    findOne(@Param('id') id: number){
        return this.orderService.findOne('' + id);
    }
    @Post()
    // Body decorator as parameter for getting all or specific portion of the request

    create(@Body() createOrderDto: CreateOrderDto){
        console.log(createOrderDto instanceof CreateOrderDto)
        return this.orderService.create(createOrderDto);
    }
    // Method to modify datas partially

    @Patch(':id')
    /* Needs of Param decorator that receives as parameter the product's id
       and the Body parameter that is going to be the request body */
    update(@Param('id') id:string, @Body() updateOrderDto: UpdateOrderDto){
        return this.orderService.update(id, updateOrderDto);
    }
    // Method to remove a product by its id

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.orderService.remove(id)
    }
}
