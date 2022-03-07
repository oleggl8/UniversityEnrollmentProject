import * as mongoose from 'mongoose';

export const UniversitySchema = new mongoose.Schema({
    name: String,
    maxNumberOfStudents: Number,
    minGpa: Number,
})