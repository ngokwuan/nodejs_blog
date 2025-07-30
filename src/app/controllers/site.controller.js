import { Course } from '../models/course.model.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

export const index = async (req, res, next) => {
  try {
    const courses = await Course.find({});
    res.render('home', {
      title: 'Home Page title',
      //dung them map de chuyen thanh object literal moi su dung duoc cho handlebar
      courses: multipleMongooseToObject(courses),
    });
  } catch (error) {
    //next la ham middleware xu ly loi
    next(error);
    // res.status(400).json({ error: 'ERROR!!!' });
  }
};

export const search = (req, res) => {
  res.render('search');
};
