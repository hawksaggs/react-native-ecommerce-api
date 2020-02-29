export default function UserRouter(router, { container }) {
  const userController = container.resolve('userController');

  router.get('/users', userController.getUsers.bind(userController));
  router.post('/users', userController.createUser.bind(userController));
  router.get('/users/:userId', userController.getUserById.bind(userController));

  return router;
}
