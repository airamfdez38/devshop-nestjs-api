import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class ProductRatingService {
    constructor( private readonly productsService: ProductsService){}

}
