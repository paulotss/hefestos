import User from "../database/models/users.model";
import ILogin from "../interfaces/ILogin";
import IUser from "../interfaces/IUser";
import CustomError from "../utils/CustomError";
import JwtToken from "../utils/JwtToken";

class UserService {
  public async login(data: ILogin) {
    const { email, password } = data;
    const result = await User.findOne({
      where: { email, password }
    });
    if (!result) throw new CustomError("Not found", 404);
    const objToken = new JwtToken(result);
    return objToken.token;
  }

  public async create(user: IUser) {
    const result = await User.create({ ...user });
    return result;
  }
}

export default UserService;