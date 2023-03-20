import Product from '../database/models/product.model';
import IProduct from '../interfaces/IProduct';
import CustomError from '../utils/CustomError';
import JwtToken from '../utils/JwtToken';

class ProductService {
  public async getAll() {
    const products = await Product.findAll({include: 'category'});
    return products;
  }

  public async getByCategory(categoryId: number) {
    const products = await Product.findAll({
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

  public async getByUserId(token: string) {
    const jwt = JwtToken.verifyToken(token);
    if (typeof jwt !== "string") {
      const { id } = jwt.data;
      const result = await Product.findAll({
        where: {userId: id}
      });
      return result;
    }
    throw new CustomError("Invalid token", 403);
  }

  public async create(product: IProduct) {
    const result = await Product.create({
      title: product.title,
      description: product.description,
      cover: product.cover,
      amount: product.amount,
      width: product.width,
      height: product.height,
      depth: product.depth,
      weight: product.weight,
      price: product.price,
      categoryId: product.categoryId,
      userId: product.userId
    });
    return result;
  }

  public async update(id: number, values: any) {
    const result =  await Product.update(values, {
      where: { id: id }
    });
    return result;
  }

  public async remove(id: number) {
    const result = await Product.destroy({
      where: { id: id }
    });
    return result;
  }
}

export default ProductService;