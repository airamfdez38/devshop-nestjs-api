import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){

    }
    //GET HTTP handler using a Nest decorator

    @Get() // Request that will be used to fetch all the results for this controller
    findAll(@Query() paginationQuery:PaginationQueryDto){
        //const {limit, offset} = paginationQuery;
        return this.userService.findAll(paginationQuery);
    }
    @Get(':id')
     /* Request that returns a result by its id.
    The @Param lets grab all incoming request parameters and use them 
    inside of the function body.*/
    findOne(@Param('id') id: number){
        return this.userService.findOne('' + id);
    }
    @Post()
    // Body decorator as parameter for getting all or specific portion of the request

    create(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto instanceof CreateUserDto)
        return this.userService.create(createUserDto);
    }
    // Method to modify datas partially

    @Patch()
    /* Needs of Param decorator that receives as parameter the product's id
    and the Body parameter that is going to be the request body */
    update( @Body() updateUserDto: CreateUserDto){
        return this.userService.update( updateUserDto);
    }
    // Method to remove a supplier by its id
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.userService.remove(id)
    }


}
