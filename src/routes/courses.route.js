import express from 'express';
import * as controller from '../app/controllers/course.controller.js';

const router = express.Router();

router.get('/create', controller.create);
router.post('/store', controller.store);

router.get('/:id/edit', controller.edit);
router.patch('/:id/restore', controller.restore);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleted);
router.delete('/:id/force', controller.forceDeleted);
router.get('/:slug', controller.show);

export const courseRouter = router;
