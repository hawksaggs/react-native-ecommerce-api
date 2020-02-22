import express from 'express';
import * as ProductController from '../controllers/product.controller';

const router = express.Router();

router.get('/products', ProductController.getProducts);
router.post('/products', ProductController.createProduct);
router.get('/products/:productId', ProductController.getProductById);

module.exports = router;
