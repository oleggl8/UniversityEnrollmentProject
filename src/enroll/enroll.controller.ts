import { Controller, Param, Post } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('enroll')
export class EnrollController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/:studentId/:universityId')
  enroll(
    @Param('studentId') studentId: string,
    @Param('universityId') universityId: string,
  ): void {
    this.studentService.enroll(studentId, universityId);
    return;
  }
}
