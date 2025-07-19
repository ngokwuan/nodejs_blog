import express from 'express';
import * as controller from '../app/controllers/news.controller.js';

const router = express.Router();

router.get('/:slug', controller.show);
router.get('/', controller.index);

export const newsRouter = router;
