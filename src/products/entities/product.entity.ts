export class Product {
  name: string;
  category: string;
  sku: string;
  price: number;
  quantity: number;
  created_at?: Date;
  modified_at?: Date;
  constructor( name: string, category: string, sku: string, price: number, quantity: number ) {
    this.name =  name;
    this.category =  category;
    this.sku =  sku;
    this.price =  price;
    this.quantity =  quantity;
    this.created_at = new Date();
   }
}
