import Address from "../database/models/address.model";
import Phone from "../database/models/phone.model";
import Sale from "../database/models/sales.model";
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
    const newUser = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      cpf: user.cpf
    });
    await Phone.create({
      area: user.area,
      number: user.cellPhone,
      type: "MOBILE",
      userId: newUser.id
    });
    await Address.create({
      cep: user.cep,
      state: user.state,
      country: "BRA",
      city: user.city,
      number: user.number,
      street: user.street,
      locality: user.locality,
      userId: newUser.id
    });
    return newUser;
  }

  public async getById(id: number) {
    const user = await User.findByPk(id, {
      include: {
        model: Address,
        as: 'address'
      }
    });
    if (!user) throw new CustomError("Not Found!", 404);
    return user;
  }

  public async getByIdWithProducts(id: number) {
    const user = await User.findByPk(id, {
      include: {
        model: Sale,
      }
    });
    if (!user) throw new CustomError("Not Found", 404);
    return user;
  }

  public async getUserById(id: number) {
    const result = await User.findByPk(Number(id), {
      include: [
        { model: Address, as: "address" },
        { model: Phone, as: "phones" }
      ],
        attributes: { exclude: ['password'] }
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }
}

export default UserService;