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

//[POST] /courses/handle-form-actions
export const handleFormActions = async (req, res, next) => {
  try {
    switch (req.body.action) {
      case 'delete':
        try {
          await Course.delete({ _id: { $in: req.body.courseIds } });
          res.redirect('/me/stored/courses');
        } catch (error) {
          next(error);
        }
        break;
      default:
        res.json({ message: 'Action is invalid' });
    }
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
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    await Course.create(req.body);
    res.redirect('/me/stored/courses');
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
//[DELETE] /courses/:id]
export const deleted = async (req, res, next) => {
  try {
    //khi xoa xong thi tu dong them truong deleted nho thu vien mongoose-delete
    await Course.delete({ _id: req.params.id });
    res.redirect('/me/stored/courses');
  } catch (error) {
    next(error);
  }
};
//[DELETE] /courses/:id/force]
export const forceDeleted = async (req, res, next) => {
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.redirect('/me/trash/courses');
  } catch (error) {
    next(error);
  }
};

//[PATCH] /courses/:id/restore]
export const restore = async (req, res, next) => {
  try {
    await Course.restore({ _id: req.params.id });
    res.redirect('/me/stored/courses');
  } catch (error) {
    next(error);
  }
};
