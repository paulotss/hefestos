import { Router } from "express";
import ProductController from "../controllers/product.controller";
import AuthHandle from "../middlewares/AuthHandle";
import multer from "multer";
import MulterStorage from "../utils/MulterStorage";

const routes = Router();
const multerStorage = new MulterStorage("s3");

routes.get("/products", (req, res, next) =>
  new ProductController(req, res, next).getAll()
);

routes.get("/products/:id", (req, res, next) =>
  new ProductController(req, res, next).getByCategory()
);

routes.get("/product/:id", (req, res, next) =>
  new ProductController(req, res, next).getById()
);

routes.get(
  "/user/products",
  (req, res, next) => AuthHandle.auth(req, res, next),
  (req, res, next) => new ProductController(req, res, next).getByUserId()
);

routes.post(
  "/product",
  multer(multerStorage.multerConfig()).single("file"),
  (req, res, next) => new ProductController(req, res, next).create()
);

routes.put("/product/:id", (req, res, next) =>
  new ProductController(req, res, next).update()
);

routes.delete("/product/:id", (req, res, next) =>
  new ProductController(req, res, next).remove()
);

routes.delete("/product/:id", (req, res, next) =>
  new ProductController(req, res, next).remove()
);

routes.get("/product/sales/:id", (req, res, next) =>
  new ProductController(req, res, next).getProductsByUserWithSales()
);

export default routes;
