
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class UsersService {// UsersService will be responsible for data storage and retieval.
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const {limit, offset} =paginationQuery;
    return this.userRepository.find({
      relations:['order', 'address'],
      skip: offset,
      take: limit,

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
}