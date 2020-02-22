import * as ProductService from '../services/product.service';

module.exports = {
    getProducts: async (req, res) => {
        const products = await ProductService.getProducts();
        return res.json(products);
    },
    getProductById: async (req, res) => {
        const product = await ProductService.getProductById(req.params.productId);
        return res.json(product);
    },
    createProduct: async (req, res) => {
        const product = await ProductService.createProduct(req.body);
        return res.json(product);
    }
}