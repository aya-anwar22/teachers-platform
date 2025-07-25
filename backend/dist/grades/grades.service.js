"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const grade_schema_1 = require("./grade.schema");
const stage_schema_1 = require("../stages/stage.schema");
const grade_with_stages_response_dto_1 = require("./dto/grade-with-stages-response.dto");
let GradesService = class GradesService {
    gradeModel;
    stageModel;
    constructor(gradeModel, stageModel) {
        this.gradeModel = gradeModel;
        this.stageModel = stageModel;
    }
    async create(data) {
        const grade = new this.gradeModel(data);
        return grade.save();
    }
    async findAll() {
        return this.gradeModel.find().exec();
    }
    async findById(id) {
        const grade = await this.gradeModel.findById(id).exec();
        if (!grade) {
            throw new common_1.NotFoundException('Grade not found');
        }
        const stages = await this.stageModel.find({ gradeId: id }).exec();
        return new grade_with_stages_response_dto_1.GradeWithStagesResponseDto(grade, stages);
    }
    async update(id, data) {
        const grade = await this.gradeModel.findByIdAndUpdate(id, data, { new: true }).exec();
        if (!grade) {
            throw new common_1.NotFoundException('Grade not found');
        }
        return grade;
    }
    async softDelete(id) {
        const grade = await this.gradeModel.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true }).exec();
        if (!grade) {
            throw new common_1.NotFoundException('Grade not found');
        }
        return grade;
    }
};
exports.GradesService = GradesService;
exports.GradesService = GradesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(grade_schema_1.Grade.name)),
    __param(1, (0, mongoose_1.InjectModel)(stage_schema_1.Stage.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], GradesService);
//# sourceMappingURL=grades.service.js.map