export const multipleMongooseToObject = (mongooseArray) => {
  return mongooseArray.map((mongooseArray) => mongooseArray.toObject());
};
export const mongooseToObject = (mongoose) => {
  return mongoose ? mongoose.toObject() : mongoose;
};
