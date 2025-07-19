import express from 'express';
import * as controller from '../app/controllers/site.controller.js';

const router = express.Router();

router.get('/search', controller.search);
router.get('/', controller.index);

export const siteRouter = router;
