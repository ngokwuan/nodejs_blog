import express from 'express';
import * as controller from '../app/controllers/me.controller.js';

const router = express.Router();

router.get('/stored/courses', controller.storedCourses);
router.get('/trash/courses', controller.trashCourses);

export const meRouter = router;
