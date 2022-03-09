import { Controller, Get, Param } from '@nestjs/common';
import { Student } from 'src/student/interfaces/student.interface';
import { StudentService } from 'src/student/student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get(':universityId')
  async getStudents(
    @Param('universityId') universityId: string,
  ): Promise<Array<Student>> {
    return await this.studentService.getStudents(universityId);
  }
}
