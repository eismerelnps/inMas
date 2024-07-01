export type ProductType = {
  _id: string;
  name: string;
  description?: string;
  category: string;

  buyPrice: number;
  sellPrice?: number;
  offerPrice?: number;

  unitOfMeasurement: 'pound' | 'kg' | 'unit';
  currency: 'usd' | 'eur' | 'cup';

  stock: number;

  buyDate: Date;
  expireDate: Date;

  rating?: number;
}