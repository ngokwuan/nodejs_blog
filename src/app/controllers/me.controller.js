import { Course } from '../models/course.model.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

//[GET] /me/stored/courses
export const storedCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({});
    const deletedCount = await Course.countDocumentsWithDeleted({
      deleted: true,
    });
    res.render('me/stored-courses', {
      courses: multipleMongooseToObject(courses),
      deletedCount: deletedCount,
    });
  } catch (error) {
    next(error);
  }
};

//[GET] /me/trash/courses

export const trashCourses = async (req, res, next) => {
  try {
    const courses = await Course.findWithDeleted({ deleted: true });
    res.render('me/trash-courses', {
      courses: multipleMongooseToObject(courses),
    });
  } catch (error) {
    next(error);
  }
};
