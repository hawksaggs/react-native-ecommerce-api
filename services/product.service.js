import Product from '../model/Product';

module.exports = {
    getProducts: async () => {
        try {
            return Product.find({ isActive: true, isOutOfStock: false });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getProductById: async (productId) => {
        try {
            return Product.findById(productId);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    createProduct: async (product) => {
        try {
            const productModel = new Product(product);
            return productModel.save();
        } catch (error) {
            throw new Error(error.message);
        }
    }
};