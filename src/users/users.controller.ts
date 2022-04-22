import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){

    }
    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.userService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.userService.findOne('' + id);
    }
    @Post()
    create(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto instanceof CreateUserDto)
        return this.userService.create(createUserDto);
    }
    @Patch(':id')
    update(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.userService.remove(id)
    }


}
