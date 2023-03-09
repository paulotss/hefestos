import Product from '../database/models/product.model';
import CustomError from '../utils/CustomError';

class ProductService {
  public async getAll() {
    const products = await Product.findAll({include: 'categories'});
    return products;
  }

  public async getByCategory(categoryId: number) {
    const products = await Product.findOne({
      where: { categoryId: categoryId },
      include: 'categories'
    });
    if (!products) throw new CustomError('Not found', 404);
    return products;
  }

  public async getById(productId: number) {
    const product = await Product.findByPk(productId);
    if(!product) throw new CustomError("Not found", 404);
    return product;
  }
}

export default ProductService;