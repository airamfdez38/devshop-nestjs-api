import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {// OrdersService will be responsible for data storage and retieval.
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
      ) {}
      // Interactions with data sources
      findAll(paginationQuery: PaginationQueryDto)  {//Pagination helps us divide into consumable segment of information
        const {limit, offset} = paginationQuery;

        return this.orderRepository.find({
          relations: ['user','invoice','product'],
          skip: offset,// offset is the number of records we want to skip before selecting records.
          take: limit,//Limit is the number of records we want to take after skipping is done.
        });
      }
    
      async findOne(id: string) {
        const order = await this.orderRepository.findOne(id, {
          relations: ['user','invoice','product']
        });
        if (!order) {
          throw new NotFoundException(`Pedido #${id} no encontrado`);// Exception when the order doesn't exist in data source
        }
        return order;
      }
    
      create(createOrderDto: CreateOrderDto) {
        const order = this.orderRepository.create(createOrderDto);
        return this.orderRepository.save(order);
      }
    
      async update(id: string, updateOrderDto: UpdateOrderDto) {
        const order = await this.orderRepository.preload({ // Preload updates an existing entity. If not exists throws an exception
          id: +id,
          ...updateOrderDto,
        });
        if (!order) {
          throw new NotFoundException(`Pedido #${id} no encontrado`);
        }
        return this.orderRepository.save(order);
      }
    
      async remove(id: string) {
        const order = await this.findOne(id);
        return this.orderRepository.remove(order);
      }
}
