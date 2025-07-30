import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(slug);
const CourseSchema = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
);
export const Course = mongoose.model('Course', CourseSchema);
