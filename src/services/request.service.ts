import Product from "../database/models/product.model";
import Request from "../database/models/requests"
import User from "../database/models/users.model";
import CustomError from "../utils/CustomError";

class RequestService {
  public async getByUserId(id: number) {
    const result = await Request.findAll({
      where: { userId: id },
      include: {
        model: User,
        as: 'users'
      }
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }
}

export default RequestService;