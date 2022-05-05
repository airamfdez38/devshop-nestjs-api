import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { InvoicesModule } from './invoices/invoices.module';
import { AddressesModule } from './addresses/addresses.module';
import { UserRatingModule } from './user-rating/user-rating.module';
import { ProductRatingModule } from './product-rating/product-rating.module';
import { OrderRatingModule } from './order-rating/order-rating.module';
import { InvoiceRatingModule } from './invoice-rating/invoice-rating.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost', 
    port: 5432, 
    username: 'postgres',
    password: 'pass123', 
    database: 'postgres', 
    autoLoadEntities: true, 
    synchronize: true, 
  }), OrdersModule, ProductsModule, SuppliersModule, InvoicesModule, AddressesModule, UserRatingModule, ProductRatingModule, OrderRatingModule, InvoiceRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
