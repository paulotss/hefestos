import Address from "../database/models/address.model";
import IAddress from "../interfaces/IAddress";

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
}

export default AddressService;