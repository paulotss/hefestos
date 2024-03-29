import { Request, Response, NextFunction } from "express";
import SalesService from "../services/sales.service";
import JwtToken from "../utils/JwtToken";

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

  public async getByUserId() {
    const { authorization } = this.request.headers;
    if (!authorization) return this.response.sendStatus(403);
    const id = JwtToken.getJwtId(authorization);
    try {
      const result = await this.service.getByUserId(Number(id));
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getByProductUserId() {
    const { authorization } = this.request.headers;
    if (!authorization) return this.response.sendStatus(403);
    const id = JwtToken.getJwtId(authorization);
    try {
      const result = await this.service.getByProductUserId(id);
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getByProductId() {
    const { id } = this.request.params;
    try {
      const result = await this.service.getByProductId(Number(id));
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async create() {
    const { userId, productId, shippingId } = this.request.body;
    try {
      const result = await this.service.create(
        Number(userId),
        Number(productId),
        Number(shippingId)
      );
      this.response.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async generatePix() {
    try {
      const { authorization } = this.request.headers;
      const { priceShipping, id } = this.request.body;
      if (!authorization) return this.response.sendStatus(403);
      const result = await this.service.pixGenerate(
        Number(id),
        authorization,
        Number(priceShipping)
      );
      return this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async statusPix() {
    try {
      const { pixOrderId } = this.request.body;
      const result = await this.service.statusPix(pixOrderId);
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default SalesController;
