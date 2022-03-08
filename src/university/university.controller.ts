import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UniversityDTO } from './dtos/univeristy.dto';
import { University } from './interfaces/university.interface';
import { UniversityService } from './university.service';

@Controller('/university') // "https://localhost:3000/university"
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get('/:id') // "https://localhost:3000/university/1293871298634"
  async find(@Param('id') id: string): Promise<University> {
    return await this.universityService.findUniversity(id);
  }

  @Post()
  async create(@Body() university: UniversityDTO): Promise<string> {
    const newUniversity = await this.universityService.createUniversity(
      university,
    );
    return newUniversity.id;
  }
}
