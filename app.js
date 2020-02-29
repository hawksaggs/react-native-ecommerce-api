import 'dotenv/config';
import './utils/db';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import { middlewareUtils } from './utils';

const router = express.Router();

const loadApp = async (app, { container }) => {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(middlewareUtils.checkToken);
  const routeIndex = indexRouter(router, { container });
  app.use('/', routeIndex);

  return app;
};

module.exports = loadApp;
