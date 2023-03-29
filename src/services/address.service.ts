import Address from "../database/models/address.model";
import IAddress from "../interfaces/IAddress";
import CustomError from "../utils/CustomError";

class AddressService {
  public async create(address: IAddress) {
    const result = await Address.create({ ...address });
    return result;
  }

  public async update(id: number, address: IAddress) {
    const result = await Address.update(address, {
      where: { id: id }
    });
    return result;
  }

  public async getByUserId(userId: number) {
    const result = await Address.findOne({
      where: { userId: userId }
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }
}

export default AddressService;