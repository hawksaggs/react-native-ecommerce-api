import jwt from './jwt';

const ignoreRoutes = ['/login', '/signup'];

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (ignoreRoutes.includes(req.path)) return next();
  if (!authorization) next(new Error('Invalid header'));
  const authorizationHeader = authorization.split(' ');
  if (authorizationHeader < 2) {
    next(new Error('Invalid header'));
  }
  const token = authorizationHeader[1];
  try {
    await jwt.verifyToken(req, token);
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  checkToken
};
