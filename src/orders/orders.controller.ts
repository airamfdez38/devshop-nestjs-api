import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../auth/auth.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService, private authService: AuthService){

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
    findOne(@Param('id') id: string){
        return this.orderService.findOne(id);
    }
    @Post()
    // Body decorator as parameter for getting all or specific portion of the request

    create(@Body() createOrderDto: CreateOrderDto){
        console.log(createOrderDto instanceof CreateOrderDto)
        return this.orderService.create(createOrderDto);
    }
    // Method to modify datas partially

    @Patch()
    /* Needs of Param decorator that receives as parameter the product's id
       and the Body parameter that is going to be the request body */
    update(@Body() updateOrderDto: CreateOrderDto){
        return this.orderService.update(updateOrderDto);
    }
    // Method to remove a product by its id

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.orderService.remove(id)
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.loginWithCredentials(req.user);
    }
    @UseGuards(JwtAuthGuard)
    @Get('user-info')
    getUserInfo(@Request() req) {
      return req.user
    }
}
