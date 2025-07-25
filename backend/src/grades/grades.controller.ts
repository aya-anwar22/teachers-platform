import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Body,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { GradeTransformInterceptor } from './interceptors/grade-transform.interceptor';
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { GradeDocument } from './grade.schema';
import { StageDocument } from 'src/stages/stage.schema';

@Controller('grades')
// @UseInterceptors(GradeTransformInterceptor)

export class GradesController {
    constructor(private readonly gradesService: GradesService){}

    @Post()
    create(@Body() createGradeDto: CreateGradeDto){
        return this.gradesService.create(createGradeDto)
    }

    @Get()
    findAll(){
        return this.gradesService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.gradesService.findById(id);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGradeDto: CreateGradeDto) {
    return this.gradesService.update(id, updateGradeDto);
    }


    @Delete(':id')
    softDelete(@Param('id') id: string){
        return this.gradesService.softDelete(id);
    }

}
