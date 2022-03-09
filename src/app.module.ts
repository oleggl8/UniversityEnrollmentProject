import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityController } from './university/university.controller';
import { UniversityService } from './university/university.service';
import { UniversityModule } from './university/university.module';
import { StudentController } from './student/student.controller';
import { EnrollController } from './enroll/enroll.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentService } from './student/student.service';

@Module({
  imports: [
    UniversityModule,
    MongooseModule.forRoot('mongodb://localhost:27017/Universities'),
    MongooseModule.forRoot('mongodb://localhost:27017/Students'),
  ],
  controllers: [
    AppController,
    UniversityController,
    StudentController,
    EnrollController,
  ],
  providers: [AppService, UniversityService, StudentService],
})
export class AppModule {}
