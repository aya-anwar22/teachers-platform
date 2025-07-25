import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Grade, GradeDocument } from './grade.schema';
import { Stage, StageDocument } from '../stages/stage.schema';
import { CreateGradeDto } from './dto/create-grade.dto';
import { GradeWithStagesResponseDto } from './dto/grade-with-stages-response.dto';

@Injectable()
export class GradesService {
  constructor(
    @InjectModel(Grade.name) private gradeModel: Model<GradeDocument>,
    @InjectModel(Stage.name) private stageModel: Model<StageDocument>,
  ) {}

  async create(data: CreateGradeDto): Promise<GradeDocument> {
    const grade = new this.gradeModel(data);
    return grade.save();
  }

  async findAll(): Promise<GradeDocument[]> {
    return this.gradeModel.find().exec();
  }


    async findById(id: string): Promise<GradeWithStagesResponseDto> {
    const grade = await this.gradeModel.findById(id).exec();
    if (!grade) {
        throw new NotFoundException('Grade not found');
    }

    const stages = await this.stageModel.find({ gradeId: id }).exec();

    return new GradeWithStagesResponseDto(grade, stages);
    }


    
  async update(id: string, data: CreateGradeDto): Promise<GradeDocument> {
    const grade = await this.gradeModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!grade) {
      throw new NotFoundException('Grade not found');
    }
    return grade;
  }

  async softDelete(id: string): Promise<GradeDocument> {
    const grade = await this.gradeModel.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true },
    ).exec();
    if (!grade) {
      throw new NotFoundException('Grade not found');
    }
    return grade;
  }
}
