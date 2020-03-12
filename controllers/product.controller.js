export default class ProductController {
  constructor(opts) {
    this.productService = opts.productService;
  }

  async getProducts(req, res) {
    const products = await this.productService.getProducts();
    return res.json(products);
  }

  async getProductById(req, res) {
    const product = await this.productService.getProductById(
      req.params.productId
    );
    return res.json(product);
  }

  async createProduct(req, res) {
    const product = await this.productService.createProduct(req.body);
    return res.json(product);
  }
}
