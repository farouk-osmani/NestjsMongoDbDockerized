import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
// update
// not stages commit
export class UpdateProductDto extends PartialType(CreateProductDto) {
  name: string;
  category: string;
  sku: string;
  price: number;
  quantity: number;
}
