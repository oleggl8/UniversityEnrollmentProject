import { Controller, Param, Post } from '@nestjs/common';

@Controller('enroll')
export class EnrollController {
  @Post('/:studentId/:universityId')
  enroll(
    @Param('studentId') studentId: string,
    @Param('universityId') universityId: string,
  ): void {
    
  }
}
