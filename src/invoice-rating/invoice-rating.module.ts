import { Module } from '@nestjs/common';
import { InvoiceRatingService } from './invoice-rating.service';
import { InvoicesModule } from '../invoices/invoices.module';

@Module({
  imports: [InvoicesModule],
  providers: [InvoiceRatingService]
})
export class InvoiceRatingModule {}
