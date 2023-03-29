import { Request, Response, NextFunction } from 'express';
import IAddress from '../interfaces/IAddress';
import AddressService from '../services/address.service';

class AddressController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: AddressService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.response = res;
    this.next = next;
    this.service = new AddressService();
  }

  public async create() {
    try {
      const address: IAddress = this.request.body;
      const result = this.service.create(address);
      this.response.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.request.params;
      const address: IAddress = this.request.body;
      const result = await this.service.update(Number(id), address);
      if (!result[0]) return this.response.sendStatus(204);
      return this.response.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default AddressController;