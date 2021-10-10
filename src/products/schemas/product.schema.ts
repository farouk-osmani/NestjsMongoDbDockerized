import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  sku: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop({default: Date.now()})
  created_at? : Date;

  @Prop({default: Date.now()})
  modified_at?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
