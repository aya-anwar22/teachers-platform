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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageSchema = exports.Stage = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const grade_schema_1 = require("../grades/grade.schema");
let Stage = class Stage {
    name;
    gradeId;
    isDeleted;
    deletedAt;
};
exports.Stage = Stage;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Stage.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: grade_schema_1.Grade.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Stage.prototype, "gradeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Stage.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", Object)
], Stage.prototype, "deletedAt", void 0);
exports.Stage = Stage = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Stage);
exports.StageSchema = mongoose_1.SchemaFactory.createForClass(Stage);
//# sourceMappingURL=stage.schema.js.map