import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class OrderRatingService {
    constructor(private readonly ordersService:OrdersService){}
}
