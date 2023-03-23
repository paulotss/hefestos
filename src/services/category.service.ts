import Category from '../database/models/category';
import CustomError from '../utils/CustomError';

class CategoryService {
  public async getAll() {
    const result = await Category.findAll();
    return result;
  }

  public async getById(id: number) {
    const result = await Category.findByPk(id);
    if (!result) throw new CustomError("Not found", 404);
    return result;
  }
}

export default CategoryService;
