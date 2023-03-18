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
    const exist = await User.findOne({
      where: { email: user.email }
    });
    if (exist) throw new CustomError("Email already exists", 409);
    const result = await User.create({ ...user });
    return result;
  }

  public async getUserById(token: string) {
    const jwt = JwtToken.verifyToken(token);
    if (typeof jwt !== "string") {
      const { id } = jwt.data;
      const result = await User.findByPk(Number(id));
      return result;
    }
    throw new CustomError("Invalid token", 403);
  }
}

export default UserService;