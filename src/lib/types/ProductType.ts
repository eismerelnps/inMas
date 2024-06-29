import { ProductUM } from "./ProductUM.enum";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  category: string;

  unitOfMeasurement: 'pound' | 'kg' | 'unit';

  price: string;
  offerPrice?: string;
  stock: number;

  rating?: number;

  buyDate: Date;
  expireDate: Date;

}