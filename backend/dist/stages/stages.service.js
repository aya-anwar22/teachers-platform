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
exports.StagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stage_schema_1 = require("./stage.schema");
const mongoose_2 = require("mongoose");
let StagesService = class StagesService {
    stageModel;
    constructor(stageModel) {
        this.stageModel = stageModel;
    }
    async create(data) {
        const stage = new this.stageModel(data);
        return stage.save();
    }
    async findAll() {
        return this.stageModel.find().exec();
    }
    async findById(id) {
        const stage = await this.stageModel.findById(id).exec();
        if (!stage) {
            throw new common_1.NotFoundException(`Stage not found`);
        }
        return stage;
    }
    async update(id, data) {
        const stage = await this.stageModel.findByIdAndUpdate(id, data, { new: true });
        if (!stage) {
            throw new common_1.NotFoundException(`Stage not found`);
        }
        return stage;
    }
    async softDelete(id) {
        const stage = await this.stageModel.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true }).exec();
        if (!stage)
            throw new common_1.NotFoundException('stage not found');
        return stage;
    }
};
exports.StagesService = StagesService;
exports.StagesService = StagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stage_schema_1.Stage.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StagesService);
//# sourceMappingURL=stages.service.js.map