import express from 'express';
import * as controller from '../app/controllers/course.controller.js';

const router = express.Router();

router.get('/create', controller.create);
router.post('/store', controller.store);

router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);
router.get('/:slug', controller.show);

export const courseRouter = router;
