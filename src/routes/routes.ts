import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const routes = Router();

routes.get(
  '/products',
  (req, res, next) => new ProductController(req, res, next).getAll()
);

export default routes;