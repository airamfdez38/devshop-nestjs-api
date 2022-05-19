
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import * as cripto from 'crypto';

@Injectable()
export class UsersService {// UsersService will be responsible for data storage and retieval.
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll() {
   
    const users = await this.userRepository.find({
      relations: ['order', 'address'],
    
    }
    );
    users.map((user:User) => delete user.password)
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id, {
      relations: ['order', 'address'],
    });
    if (!user) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);// Exception when the user doesn't exist in data source
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email }
    })
  }

  create(createUserDto: CreateUserDto):Promise<CreateUserDto> {
    const user = this.userRepository.create(createUserDto);
    user.password = cripto.createHmac('sha256', user.password).digest('hex')
    return this.userRepository.save(user);
  }
  async updatePassword( updateUserDto: CreateUserDto) {
    const user = this.userRepository.create(updateUserDto);
    user.password = cripto.createHmac('sha256', user.password).digest('hex')
    return this.userRepository.save(updateUserDto);
  }

  async update( updateUserDto: CreateUserDto) {
    
    return this.userRepository.save(updateUserDto);
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