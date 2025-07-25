"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageModule = void 0;
const common_1 = require("@nestjs/common");
const stages_controller_1 = require("./stages.controller");
const mongoose_1 = require("@nestjs/mongoose");
const stage_schema_1 = require("./stage.schema");
const stages_service_1 = require("./stages.service");
let StageModule = class StageModule {
};
exports.StageModule = StageModule;
exports.StageModule = StageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: stage_schema_1.Stage.name, schema: stage_schema_1.StageSchema }])
        ],
        exports: [mongoose_1.MongooseModule],
        controllers: [stages_controller_1.StagesController],
        providers: [stages_service_1.StagesService]
    })
], StageModule);
//# sourceMappingURL=stage.module.js.map