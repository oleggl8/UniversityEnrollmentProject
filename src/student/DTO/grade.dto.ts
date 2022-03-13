import { IsNotEmpty, IsNumber } from 'class-validator';

export class GradeDTO {
  @IsNotEmpty()
  readonly courseName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly grade: number;
}
