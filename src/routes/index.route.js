import express from 'express';
import { newsRouter } from './news.route.js';
import { siteRouter } from './site.route.js';

export const mainRoute = (app) => {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
};
