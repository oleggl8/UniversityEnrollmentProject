import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { University } from './interfaces/university.interface';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
    @Get(':id')
    async find(id): Promise<University> {
        return this.find(id);
    }

    @Post()
    create(): string {
        return '';
    }
}
