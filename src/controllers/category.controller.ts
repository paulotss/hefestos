import { Request, Response, NextFunction } from 'express';
import CategoryService from '../services/category.service';

class CategoryController {
  private request: Request;
  private resonse: Response;
  private next: NextFunction;
  private service: CategoryService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.resonse = res;
    this.next = next;
    this.service = new CategoryService();
  }

  public async getAll() {
    try {
      const result = await this.service.getAll();
      this.resonse.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.request.params;
    try {
      const result = await this.service.getById(Number(id));
      this.resonse.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CategoryController;
