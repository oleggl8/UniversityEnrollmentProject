import * as mongoose from 'mongoose';

export const UniversitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  maxNumberOfStudents: { type: Number, required: true },
  minGpa: { type: Number, required: true },
});
