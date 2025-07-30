import { Course } from '../models/course.model.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

//[GET] /me/stored/courses
export const storedCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({});
    res.render('me/storedCourses', {
      courses: multipleMongooseToObject(courses),
    });
  } catch (error) {
    next(error);
  }
};
