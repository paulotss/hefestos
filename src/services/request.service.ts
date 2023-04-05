import Product from "../database/models/product.model";
import Request from "../database/models/requests"
import CustomError from "../utils/CustomError";

class RequestService {
  public async getByUserId(id: number) {
    const result = await Request.findAll({
      where: { userId: id },
      include: {
        model: Product,
        as: 'products'
      }
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }

  public async create(userId: number, productId: number) {
    const result = await Request.create({
      userId: userId,
      productId: productId,
      status: "paid"
    });
    return result;
  }
}

export default RequestService;