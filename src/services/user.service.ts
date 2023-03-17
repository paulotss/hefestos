import User from "../database/models/users.model";
import ILogin from "../interfaces/ILogin";
import CustomError from "../utils/CustomError";
import JwtToken from "../utils/JwtToken";

class UserService {
  public login(data: ILogin) {
    const { email, password } = data;
    const result = User.findOne({
      where: { email, password }
    });
    if (!result) throw new CustomError("Not found", 404);
    const objToken = new JwtToken(data);
    return objToken.token;
  }
}

export default UserService;