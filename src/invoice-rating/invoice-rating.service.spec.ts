import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceRatingService } from './invoice-rating.service';

describe('InvoiceRatingService', () => {
  let service: InvoiceRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceRatingService],
    }).compile();

    service = module.get<InvoiceRatingService>(InvoiceRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
