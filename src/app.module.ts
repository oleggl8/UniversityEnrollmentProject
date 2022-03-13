import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    UniversityModule,
    StudentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/students'),
    MongooseModule.forRoot('mongodb://localhost:27017/universities'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
