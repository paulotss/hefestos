import Shipping from "../database/models/shippgins.model";

class ShippingService {
  public async getAll() {
    const result = await Shipping.findAll();
    return result;
  }
}

export default ShippingService;