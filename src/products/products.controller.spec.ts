import { Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductDocument } from './schemas/product.schema';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;
  let logger: Logger;

  beforeEach(async () => {
    logger = new Logger(null);
    productsService = new ProductsService(null);
    productsController = new ProductsController(productsService, logger);
  });

  describe('create', () => {
    it('should return a new product created', async () => {
      const responseRequest =  {
        quantity: 20,
        price: 69,
        sku: 'A0001',
        category: 'categ',
        name: 'updated data put',
        _id: '6163089c6174e9d51d0f5817',
        __v: 0
      };
      const bodyRequest: CreateProductDto = {
        quantity: 20,
        price: 69,
        sku: 'A0001',
        category: 'categ',
        name: 'updated data put'
      };
      jest
        .spyOn(productsService, 'create')
        .mockImplementation(() => Promise.resolve(responseRequest));
      expect(await productsController.create(bodyRequest)).toBe(responseRequest);
    });
  });
  
  describe('findOne', () => {
    it('should return one product by id', async () => {
      const responseRequest: ProductDocument = new ProductDocument( 
        quantity: 20,
        price: 69,
        sku: 'A0001',
        category: 'categ',
        name: 'updated data put'
      );
      jest
        .spyOn(productsService, 'findOne')
        .mockImplementation(() => Promise.resolve(responseRequest));
      expect(await productsController.findOne('6163089c6174e9d51d0f5817')).toBe(responseRequest);
    });
  });

  describe('findAll', () => {
    it('should return an empty array', async () => {
      const result: Product[] = [];
      jest
        .spyOn(productsService, 'findAll')
        .mockImplementation(jest.fn(() => Promise.resolve(result)));
      expect(await productsController.findAll()).toBe(result);
    });

    it('should return an array of products', async () => {
      const result: Product[] = [
        {
          name: 'AP Oman PC - Aluminum',
          category: 'Computers',
          sku: 'A0003',
          price: 1399,
          quantity: 10,
        },
        {
          name: 'Fony UHD HDR 55 4k TV',
          category: 'TVs and Accessories',
          sku: 'A0004',
          price: 1399,
          quantity: 5,
        }
      ];
      jest
        .spyOn(productsService, 'findAll')
        .mockImplementation(jest.fn(() => Promise.resolve(result)));
      expect(await productsController.findAll()).toBe(result);
    });
  });
});
