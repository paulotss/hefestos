import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: ProductService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.response = res;
    this.next = next;
    this.service = new ProductService();
  }

  public async getAll() {
    const products = await this.service.getAll();
    this.response.status(200).json(products);
  }
}

export default ProductController;