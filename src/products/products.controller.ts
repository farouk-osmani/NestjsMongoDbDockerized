import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly logger: Logger,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    this.logger.debug('ProductsController try to add a new product', {
      product: createProductDto,
    });
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    this.logger.debug('ProductsController try to get all products');
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug(
      'ProductsController try to get one products with id:',
      id,
    );
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  partialUpdate(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
