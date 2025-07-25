import { Grade } from "../grade.schema";
export declare class GradeResponseDto {
    id: string;
    name: string;
    isDeleted: boolean;
    deletedAt: Date | null;
    constructor(grade: Grade);
}
