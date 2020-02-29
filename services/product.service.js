import Product from '../model/product.model';

export default class ProductService {
  constructor(opts) {}

  async getProducts() {
    try {
      return Product.find({
        isActive: true,
        isOutOfStock: false
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getProductById(productId) {
    try {
      return Product.findById(productId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createProduct(product) {
    try {
      const productModel = new Product(product);
      return productModel.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
