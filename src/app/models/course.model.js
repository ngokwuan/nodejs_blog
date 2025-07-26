import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const Course = mongoose.model('Course', CourseSchema);
