import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import multer from 'multer';
import { extname } from 'path'

const routes = Router();
const storage = multer.diskStorage({
  destination: function(_req, _res, cb) {
    cb(null, 'src/media')
  },
  filename: function(_req, file, cb) {
    cb(null, Date.now() + extname(file.originalname))
  }
})
const upload = multer({storage: storage});

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
  upload.single('file'),
  (req, res, next) => new ProductController(req, res, next).create()
);

routes.put(
  '/product/:id',
  (req, res, next) => new ProductController(req, res, next).update()
);

routes.delete(
  '/product/:id',
  (req, res, next) => new ProductController(req, res, next).remove()
)

export default routes;