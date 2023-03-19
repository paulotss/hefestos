import { Request, Response, NextFunction } from 'express'
import IUser from '../interfaces/IUser';
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

  public async create() {
    const user: IUser = this.request.body;
    try {
      const result = await this.service.create(user);
      return this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getUserById() {
    const { authorization } = this.request.headers
    if (!authorization) return this.response.sendStatus(403);
    try {
      const result = await this.service.getUserById(authorization);
      return this.response.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default UserController;