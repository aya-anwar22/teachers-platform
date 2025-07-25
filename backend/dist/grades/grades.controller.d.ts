import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { GradeDocument } from './grade.schema';
export declare class GradesController {
    private readonly gradesService;
    constructor(gradesService: GradesService);
    create(createGradeDto: CreateGradeDto): Promise<GradeDocument>;
    findAll(): Promise<GradeDocument[]>;
    findById(id: string): Promise<import("./dto/grade-with-stages-response.dto").GradeWithStagesResponseDto>;
    update(id: string, updateGradeDto: CreateGradeDto): Promise<GradeDocument>;
    softDelete(id: string): Promise<GradeDocument>;
}
