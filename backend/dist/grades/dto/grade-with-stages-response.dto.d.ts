import { Grade } from '../grade.schema';
import { Stage } from '../../stages/stage.schema';
export declare class GradeWithStagesResponseDto {
    id: string;
    name: string;
    isDeleted: boolean;
    deletedAt: Date | null;
    stages: {
        id: string;
        name: string;
        isDeleted: boolean;
        deletedAt: Date | null;
    }[];
    constructor(grade: Grade, stages: Stage[]);
}
