import { Injectable } from '@nestjs/common';
import { University } from './interfaces/university.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class UniversityService {
  constructor(
    @InjectModel('University')
    private readonly universityModel: Model<University>,
    private readonly studentService: StudentService,
  ) {}

  async findUniversity(id: string): Promise<University> {
    return await this.universityModel.findOne({ _id: id });
  }

  async createUniversity(university: University): Promise<University> {
    const newUniversity = new this.universityModel(university);
    return await newUniversity.save();
  }

  async enroll(studentId: string, universityId: string): Promise<void> {
    const universityToEnroll = await this.findUniversity(universityId);
    const studentToBeEnrolled = await this.studentService.findStudent(
      studentId,
    );
    // to be continued - Validation
  }
}
