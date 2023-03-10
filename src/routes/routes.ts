import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const routes = Router();

routes.get(
  '/products',
  (req, res, next) => new ProductController(req, res, next).getAll()
);

routes.get(
  '/products/:id',
  (req, res, next) => new ProductController(req, res, next).getByCategory()
);

routes.get(
  '/product/:id',
  (req, res, next) => new ProductController(req, res, next).getById()
);

routes.post(
  '/product',
  (req, res, next) => new ProductController(req, res, next).create()
);

export default routes;