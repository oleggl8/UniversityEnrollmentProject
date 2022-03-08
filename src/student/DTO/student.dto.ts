import { IsNotEmpty } from 'class-validator';
import { GradeDTO } from './grade.dto';

export class StudentDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly grades: Array<GradeDTO>;
}
