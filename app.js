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
  app.use(function(err, req, res, next) {
    // console.log(err);
    // console.error(err);
    console.log(err);
    console.log(res.statusCode);
    console.log(err.message); 
    return res.json({ message: err.message })
    next(err);
  });

  return app;
};

module.exports = loadApp;
