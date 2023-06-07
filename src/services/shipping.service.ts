import Shipping from "../database/models/shippgins.model";
import CustomError from "../utils/CustomError";

class ShippingService {
  public async getAll() {
    const result = await Shipping.findAll();
    return result;
  }

  public async getById(id: number) {
    const result = await Shipping.findByPk(id);
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }
}

export default ShippingService;
