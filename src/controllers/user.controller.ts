import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user.service';

class UserController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.request = req;
    this.response = res;
    this.next = next;
    this.service = new UserService();
  }

  public async login() {
    const login = this.request.body;
    try {
      const token = await this.service.login(login);
      this.response.status(200).json(token);
    } catch (err) {
      this.next(err);
    }
  }
}

export default UserController;