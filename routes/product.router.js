export default function productRouter(router, { container }) {
  const productController = container.resolve('productController');

  router.get(
    '/products',
    productController.getProducts.bind(productController)
  );
  router.post(
    '/products',
    productController.createProduct.bind(productController)
  );
  router.get(
    '/products/:productId',
    productController.getProductById.bind(productController)
  );

  return router;
}
