import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentDTO } from './DTO/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() student: StudentDTO): Promise<string> {
    const newStudent = await this.studentService.createStudent(student);
    return newStudent.id;
  }
}
