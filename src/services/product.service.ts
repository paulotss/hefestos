import Product from '../database/models/product.model';

class ProductService {
  public async getAll() {
    const products = await Product.findAll({include: 'categories'});
    return products;
  }
}

export default ProductService;