import { Request, Response, NextFunction } from 'express';
import SalesService from '../services/sales.service';

class SalesController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: SalesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.response = res;
    this.next = next;
    this.service = new SalesService();
  }

  public async generatePix() {
    try {
      const { id } = this.request.params;
      const { authorization } = this.request.headers;
      if (!authorization) return this.response.sendStatus(403);
      const result = await this.service.pixGenerate(Number(id), authorization);
      return this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default SalesController;