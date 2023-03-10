import Product from '../database/models/product.model';
import IProduct from '../interfaces/IProduct';
import CustomError from '../utils/CustomError';

class ProductService {
  public async getAll() {
    const products = await Product.findAll({include: 'category'});
    return products;
  }

  public async getByCategory(categoryId: number) {
    const products = await Product.findOne({
      where: { categoryId: categoryId },
      include: 'category'
    });
    if (!products) throw new CustomError('Not found', 404);
    return products;
  }

  public async getById(productId: number) {
    const product = await Product.findByPk(productId);
    if(!product) throw new CustomError("Not found", 404);
    return product;
  }

  public async create(product: IProduct) {
    const result = await Product.create({
      title: product.title,
      description: product.description,
      amount: product.amount,
      width: product.width,
      height: product.height,
      depth: product.depth,
      weight: product.weight,
      price: product.price,
      categoryId: product.categoryId
    });
    return result;
  }
}

export default ProductService;