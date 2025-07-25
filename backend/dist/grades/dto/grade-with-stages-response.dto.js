"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeWithStagesResponseDto = void 0;
class GradeWithStagesResponseDto {
    id;
    name;
    isDeleted;
    deletedAt;
    stages;
    constructor(grade, stages) {
        this.id = grade._id;
        this.name = grade.name;
        this.isDeleted = grade.isDeleted;
        this.deletedAt = grade.deletedAt;
        this.stages = stages.map(stage => ({
            id: stage._id,
            name: stage.name,
            isDeleted: stage.isDeleted,
            deletedAt: stage.deletedAt,
        }));
    }
}
exports.GradeWithStagesResponseDto = GradeWithStagesResponseDto;
//# sourceMappingURL=grade-with-stages-response.dto.js.map