import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Grade } from '../interfaces/grade.interface';

@Schema()
export class Student {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Array, required: true })
  grades: Array<Grade>;

  @Prop({ type: String, required: false, default: undefined })
  universityId: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
