import ICategory from './ICategory';

interface IProduct {
  id?: number;
  title: string;
  description: string;
  amount: number;
  width: number;
  height: number;
  depth: number;
  weight: number;
  price: number;
  categoryId: number;
  category?: ICategory;
}

export default IProduct;