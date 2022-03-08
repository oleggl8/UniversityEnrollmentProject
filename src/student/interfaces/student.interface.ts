import { Grade } from './grade.interface';

export interface Student {
  id?: string;
  name: string;
  grades: Array<Grade>;
}
