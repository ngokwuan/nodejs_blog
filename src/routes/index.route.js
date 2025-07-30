import { courseRouter } from './courses.route.js';
import { newsRouter } from './news.route.js';
import { siteRouter } from './site.route.js';
import { meRouter } from './me.route.js';

export const mainRoute = (app) => {
  app.use('/me', meRouter);
  app.use('/courses', courseRouter);
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
};
