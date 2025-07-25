import { Model } from 'mongoose';
import { GradeDocument } from './grade.schema';
import { StageDocument } from '../stages/stage.schema';
import { CreateGradeDto } from './dto/create-grade.dto';
import { GradeWithStagesResponseDto } from './dto/grade-with-stages-response.dto';
export declare class GradesService {
    private gradeModel;
    private stageModel;
    constructor(gradeModel: Model<GradeDocument>, stageModel: Model<StageDocument>);
    create(data: CreateGradeDto): Promise<GradeDocument>;
    findAll(): Promise<GradeDocument[]>;
    findById(id: string): Promise<GradeWithStagesResponseDto>;
    update(id: string, data: CreateGradeDto): Promise<GradeDocument>;
    softDelete(id: string): Promise<GradeDocument>;
}
