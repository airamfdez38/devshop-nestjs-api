
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Event } from '../events/entities/event.entity';

@Injectable()
export class UsersService {// UsersService will be responsible for data storage and retieval.
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {//Pagination helps us divide into consumable segment of information
    const {limit, offset} =paginationQuery;
    return this.userRepository.find({
      relations:['order', 'address'],
      skip: offset,// offset is the number of records we want to skip before selecting records.
      take: limit,//Limit is the number of records we want to take after skipping is done.

    }
    );
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id, {
      relations: ['order','address'],
    });
    if (!user) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);// Exception when the user doesn't exist in data source
    }
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id: +id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);// Preload updates an existing entity. If not exists throws an exception
    }
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
 /* async recommendUser(user: User) {
    const queryRunner = this.connection.createQueryRunner();
    
    await queryRunner.connect();
    await queryRunner.startTransaction(); 
    try {
      user.recommendations++;
      
      const recommendEvent = new Event();
      recommendEvent.name = 'recommend_user';
      recommendEvent.type = 'user';
      recommendEvent.payload = { userId: user.id };
    
      await queryRunner.manager.save(user); 
      await queryRunner.manager.save(recommendEvent);
      
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

  }*/

}