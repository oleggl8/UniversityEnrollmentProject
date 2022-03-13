import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollController } from 'src/enroll/enroll.controller';
import { StudentsController } from 'src/students/students.controller';
import { UniversityModule } from 'src/university/university.module';
import { StudentSchema } from './schemas/student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    UniversityModule,
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentController, StudentsController, EnrollController],
  providers: [StudentService],
})
export class StudentModule {}
