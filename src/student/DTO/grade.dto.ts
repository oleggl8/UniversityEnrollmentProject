import { IsNotEmpty } from 'class-validator';

export class GradeDTO {
  @IsNotEmpty()
  readonly courseName: string;

  @IsNotEmpty()
  readonly grade: number;
}
