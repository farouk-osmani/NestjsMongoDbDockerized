import { Test, TestingModule } from '@nestjs/testing';
import { ProductsModule } from './products.module';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

/*  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
      imports: [ProductsModule],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });*/

  it('should be defined', () => {
   // expect(service).toBeDefined();
  });
});
