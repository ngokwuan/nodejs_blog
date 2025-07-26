import { Course } from '../models/course.model.js';
export const index = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: 'ERROR!!!' });
  }

  // res.render('home');
};

export const search = (req, res) => {
  res.render('search');
};
