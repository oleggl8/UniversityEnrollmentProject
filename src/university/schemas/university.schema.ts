import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class University {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  maxNumberOfStudents: number;

  @Prop({ type: Number, required: true })
  minGpa: number;
}

export const UniversitySchema = SchemaFactory.createForClass(University);
