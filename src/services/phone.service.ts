import Phone from "../database/models/phone.model";
import CustomError from "../utils/CustomError";

class PhoneService {
  public async getByUserId(userId: number) {
    const result = await Phone.findOne({
      where: { userId: userId }
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }
}

export default PhoneService;