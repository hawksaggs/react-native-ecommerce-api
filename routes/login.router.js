export default function loginRouter(router, { container }) {
  const loginController = container.resolve('loginController');

  router.post('/login', loginController.login.bind(loginController));
  router.post('/signup', loginController.signUp.bind(loginController));
  return router;
}
