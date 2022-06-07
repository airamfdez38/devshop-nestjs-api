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
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true, 
    synchronize: true, 
    ssl: {
      rejectUnauthorized: false
    },
  }),AuthenticationModule, OrdersModule, ProductsModule, SuppliersModule, InvoicesModule, AddressesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
