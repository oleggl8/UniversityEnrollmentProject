import { IsInt, IsNotEmpty } from 'class-validator';

export class UniversityDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsInt()
  readonly maxNumberOfStudents: number;

  @IsNotEmpty()
  readonly minGpa: number;
}
