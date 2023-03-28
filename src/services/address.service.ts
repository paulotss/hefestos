import Address from "../database/models/address.model";
import IAddress from "../interfaces/IAddress";

class AddressService {
  public async create(address: IAddress) {
    const result = await Address.create({ ...address });
    return result;
  }
}

export default AddressService;