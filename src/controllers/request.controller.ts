import { Request, Response, NextFunction } from 'express';
import RequestService from '../services/request.service';

class RequestController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: RequestService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.response = res;
    this.next = next;
    this.service = new RequestService();
  }

  public async getByUserId() {
    const { id } = this.request.params;
    try {
      const result = await this.service.getByUserId(Number(id));
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async create() {
    const {userId, productId} = this.request.body;
    try {
      const result = await this.service.create(Number(userId), Number(productId));
      this.response.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default RequestController;