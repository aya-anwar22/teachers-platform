"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeResponseDto = void 0;
class GradeResponseDto {
    id;
    name;
    isDeleted;
    deletedAt;
    constructor(grade) {
        this.id = grade._id;
        this.name = grade.name;
        this.isDeleted = grade.isDeleted;
        this.deletedAt = grade.deletedAt;
    }
}
exports.GradeResponseDto = GradeResponseDto;
//# sourceMappingURL=grade-response.dto.js.map