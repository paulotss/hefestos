import Product from '../database/models/product.model';
import IProduct from '../interfaces/IProduct';
import User from '../database/models/users.model';
import CustomError from '../utils/CustomError';
import JwtToken from '../utils/JwtToken';
import fs from 'fs';
import path from 'path';
import Sale from '../database/models/sales.model';
//import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import aws from 'aws-sdk';

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
    const product = await Product.findByPk(productId, {
      include: {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] }
      },
    });
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

  public async getProductsByUserWithSales(id: number) {
    const result = await Product.findAll({
      where: { userId: id },
      include: {
        model: Sale,
        as: 'sales'
      }
    });
    if (!result) throw new CustomError("Not Found", 404);
    return result;
  }

  public async create(product: IProduct) {
    const result = await Product.create({
      title: product.title,
      description: product.description,
      cover: product.cover,
      amount: product.amount || null,
      width: product.width || null,
      height: product.height || null,
      depth: product.depth || null,
      weight: product.weight || null,
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
    const product = await this.getById(id);
    const s3 = new aws.S3();
    s3.config.update({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
      }
    });

    await s3.deleteObject({
      Bucket: process.env.AWS_S3_BUCKET || '',
      Key: product.cover
    }).promise();

    const result = await Product.destroy({
      where: { id: id }
    });
    return result;
  }
}

export default ProductService;