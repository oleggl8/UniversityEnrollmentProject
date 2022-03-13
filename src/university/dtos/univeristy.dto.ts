import { IsNotEmpty } from 'class-validator';

export class UniversityDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly maxNumberOfStudents: number;

  @IsNotEmpty()
  readonly minGpa: number;
}
