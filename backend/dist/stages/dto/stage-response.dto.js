"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageResponseDto = void 0;
class StageResponseDto {
    id;
    name;
    gradeId;
    isDeleted;
    deletedAt;
    constructor(stage) {
        this.id = stage._id;
        this.name = stage.name;
        this.gradeId = stage.gradeId;
        this.isDeleted = stage.isDeleted;
        this.deletedAt = stage.deletedAt;
    }
}
exports.StageResponseDto = StageResponseDto;
//# sourceMappingURL=stage-response.dto.js.map