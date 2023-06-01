import { Request, Response, NextFunction } from "express";
import IProduct from "../interfaces/IProduct";
import ProductService from "../services/product.service";
import JwtToken from "../utils/JwtToken";
import CustomError from "../utils/CustomError";

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
    const { limit } = this.request.query;
    try {
      if (!limit) throw new CustomError("Bad Request", 400);
      const products = await this.service.getAll(Number(limit));
      this.response.status(200).json(products);
    } catch (error) {
      this.next(error);
    }
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

  public async getByUserId() {
    const { authorization } = this.request.headers;
    if (!authorization) return this.response.sendStatus(403);
    try {
      const result = await this.service.getByUserId(authorization);
      return this.response.status(200).json(result);
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

  public async getProductsByUserWithSales() {
    const { id } = this.request.params;
    try {
      const products = await this.service.getProductsByUserWithSales(
        Number(id)
      );
      this.response.status(200).json(products);
    } catch (error) {
      this.next(error);
    }
  }

  public async create() {
    try {
      const product: IProduct = this.request.body;
      const { authorization } = this.request.headers;
      if (!authorization) return this.response.sendStatus(403);
      product.userId = JwtToken.getJwtId(authorization);
      product.cover = this.request.file?.filename;
      const result = await this.service.create(product);
      this.response.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.request.params;
      const values = this.request.body;
      await this.service.update(Number(id), values);
      this.response.sendStatus(201);
    } catch (error) {
      this.next(error);
    }
  }

  public async remove() {
    try {
      const { id } = this.request.params;
      const result = await this.service.remove(Number(id));
      this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default ProductController;
