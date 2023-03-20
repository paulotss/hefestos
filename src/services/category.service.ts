import Category from '../database/models/category';

class CategoryService {
  public async getAll() {
    const result = await Category.findAll();
    return result;
  }
}

export default CategoryService;
