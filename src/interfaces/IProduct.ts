import ICategory from './ICategory';

interface IProduct {
  id?: number;
  title: string;
  description: string;
  cover: string | any;
  amount: number;
  width: number;
  height: number;
  depth: number;
  weight: number;
  price: number;
  categoryId: number;
  file?: any;
  category?: ICategory;
}

export default IProduct;