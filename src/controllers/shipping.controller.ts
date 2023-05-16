import { Request, Response, NextFunction } from "express";
import ShippingService from "../services/shipping.service";

class ShippingController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: ShippingService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.response = res;
    this.next = next;
    this.service = new ShippingService();
  }

  public async getAll() {
    try {
      const result = await this.service.getAll();
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default ShippingController;