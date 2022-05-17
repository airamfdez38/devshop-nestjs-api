import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductsService {// ProductsService will be responsible for data storage and retieval.
  constructor(
      @InjectRepository(Product)
      private readonly productRepository: Repository<Product>,
    ) {}
    // Interactions with data sources
    findAll(paginationQuery: PaginationQueryDto) {//Pagination helps us divide into consumable segment of information
      const {limit, offset} = paginationQuery;
      return this.productRepository.find({
        relations: ['order', 'supplier'],
        skip: offset,// offset is the number of records we want to skip before selecting records.
        take: limit,//Limit is the number of records we want to take after skipping is done.
      });
    }
  
    async findOne(id: string) {
      const product = await this.productRepository.findOne(id, {
        relations: ['order', 'supplier']
      });
      if (!product) {
        throw new NotFoundException(`Producto #${id} no encontrado`);// Exception when the order doesn't exist in data source
      }
      return product;
    }
  
    create(createProductDto: CreateProductDto) {
      const product = this.productRepository.create(createProductDto);
      return this.productRepository.save(product);
    }
  
    async update( updateProductDto: CreateProductDto) {
     
      return this.productRepository.save(updateProductDto);
    }
  
    async remove(id: string) {
      const product = await this.findOne(id);
      return this.productRepository.remove(product);
    }
   /* async recommendProduct(product: Product) {
      const queryRunner = this.connection.createQueryRunner();
      
      await queryRunner.connect();
      await queryRunner.startTransaction(); 
      try {
        product.recommendations++;
        
        const recommendEvent = new Event();
        recommendEvent.name = 'recommend_product';
        recommendEvent.type = 'product';
        recommendEvent.payload = { productId: product.id };
      
        await queryRunner.manager.save(product); 
        await queryRunner.manager.save(recommendEvent);
        
        await queryRunner.commitTransaction();
      } catch (err) {
        await queryRunner.rollbackTransaction();
      } finally {
        await queryRunner.release();
      }
    }  */ 
}
