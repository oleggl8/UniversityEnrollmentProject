import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grades: { type: Array, required: true },
  universityId: { type: String, required: false, default: undefined },
});
