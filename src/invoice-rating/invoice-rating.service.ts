import { Injectable } from '@nestjs/common';
import { InvoicesService } from '../invoices/invoices.service';

@Injectable()
export class InvoiceRatingService {
    constructor(private readonly invoicesService: InvoicesService){}
}
