import { Request, Response, NextFunction } from 'express';
import IProduct from '../interfaces/IProduct';
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

  public async getByCategory() {
    const { id } = this.request.params;
    try {
      const products = await this.service.getByCategory(Number(id));
      this.response.status(200).json(products);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.request.params;
    try {
      const product = await this.service.getById(Number(id));
      this.response.status(200).json(product);
    } catch (error) {
      this.next(error);
    }
  }

  public async create() {
    try {
      const product: IProduct = this.request.body;
      const result = await this.service.create(product);
      this.response.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default ProductController;