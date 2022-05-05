import { Module } from '@nestjs/common';
import { OrderRatingService } from './order-rating.service';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [OrdersModule],
  providers: [OrderRatingService]
})
export class OrderRatingModule {}
