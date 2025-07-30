import { Course } from '../models/course.model.js';
import { mongooseToObject } from '../../util/mongoose.js';

export const show = async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug }).exec();

    res.render('courses/show', {
      title: 'Detail course',
      course: mongooseToObject(course),
    });
  } catch (error) {
    next(error);
  }
};

//[GET]/courses/create
export const create = async (req, res, next) => {
  res.render('courses/create');
};
//[GET]/courses/:id/edit
export const edit = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).exec();
    console.log(course);
    res.render('courses/edit', {
      course: mongooseToObject(course),
    });
  } catch (error) {
    next(error);
  }
};
//[POST] /courses/store]
export const store = async (req, res, next) => {
  try {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    await Course.create(formData);
    res.redirect('/');
  } catch (error) {
    res.send('Failure!!!');
    next(error);
  }
};
//[PUT] /courses/:id]
export const update = async (req, res, next) => {
  try {
    const course = await Course.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/me/stored/courses');
  } catch (error) {
    next(error);
  }
};
