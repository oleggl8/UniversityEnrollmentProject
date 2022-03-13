import { Controller, Param, Post } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('enroll')
export class EnrollController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/:studentId/:universityId')
  async enroll(
    @Param('studentId') studentId: string,
    @Param('universityId') universityId: string,
  ): Promise<void> {
    await this.studentService.enroll(studentId, universityId);
    return;
  }
}
