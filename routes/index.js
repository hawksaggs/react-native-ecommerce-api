import productRoutes from './product.router';
import userRoutes from './user.router';
import loginRoutes from './login.router';

export default function index(router, { container }) {
  productRoutes(router, { container });
  userRoutes(router, { container });
  loginRoutes(router, { container });
  return router;
}
