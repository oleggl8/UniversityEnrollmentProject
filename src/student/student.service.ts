import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './interfaces/student.interface';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student')
    private readonly studentModel: Model<Student>,
  ) {}

  async findStudent(studentId: string): Promise<Student> {
    return await this.studentModel.findOne({ _id: studentId });
  }

  async createStudent(student: Student): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }
}
