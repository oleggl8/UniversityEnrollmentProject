import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { University } from './interfaces/university.interface';
import { UniversityService } from './university.service';

@Controller('/university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get(':id')
  async find(id): Promise<University> {
    return await this.universityService.find(id);
  }

  @Post()
  async create(@Body() Body): Promise<string> {
    return '';
  }
}
