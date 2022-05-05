import { Test, TestingModule } from '@nestjs/testing';
import { AddressRatingService } from './address-rating.service';

describe('AddressRatingService', () => {
  let service: AddressRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressRatingService],
    }).compile();

    service = module.get<AddressRatingService>(AddressRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
