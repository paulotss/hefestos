import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import multer from 'multer';
import UserController from '../controllers/user.controller';
import AuthHandle from '../middlewares/AuthHandle';
import CategoryController from '../controllers/category.controller';
import AddressController from '../controllers/address.controller';
import SalesController from '../controllers/sales.controller';
import ShippingController from '../controllers/shipping.controller';
import MulterStorage from '../utils/MulterStorage';

const routes = Router();
const multerStorage = new MulterStorage("s3");



routes.post(
  '/login',
  (req, res, next) => new UserController(req, res, next).login()
);

routes.get(
  '/user',
  (req, res, next) => AuthHandle.auth(req, res, next),
  (req, res, next) => new UserController(req, res, next).getUserById()
);

routes.post(
  '/user/create',
  (req, res, next) => new UserController(req, res, next).create()
);

routes.get(
  '/categories',
  (req, res, next) => new CategoryController(req, res, next).getAll()
);

routes.get(
  '/category/:id',
  (req, res, next) => new CategoryController(req, res, next).getById()
);

routes.post(
  '/address',
  (req, res, next) => new AddressController(req, res, next).create()
);

routes.put(
  '/address/:id',
  (req, res, next) => new AddressController(req, res, next).update()
);

routes.post(
  '/sales/genpix',
  (req, res, next) => new SalesController(req, res, next).generatePix()
);

routes.post(
  '/sales/statuspix',
  (req, res, next) => new SalesController(req, res, next).statusPix()
);

routes.get(
  '/user/request/:id',
  (req, res, next) => new UserController(req, res, next).getByIdWithProducts()
);

routes.get(
  '/sales',
  (req, res, next) => new SalesController(req, res, next).getByUserId()
);

routes.post(
  '/sales',
  (req, res, next) => new SalesController(req, res, next).create()
);

routes.get(
  '/sale/product/user',
  (req, res, next) => new SalesController(req, res, next).getByProductUserId()
);

routes.get(
  '/shippings',
  (req, res, next) => new ShippingController(req, res, next).getAll()
);

routes.get("/sale/product/:id", (req, res, next) =>
  new SalesController(req, res, next).getByProductId()
);

export default routes;