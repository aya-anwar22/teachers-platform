"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageTransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const stage_response_dto_1 = require("../../dto/stage-response.dto");
let StageTransformInterceptor = class StageTransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            if (Array.isArray(data)) {
                return data.map((stage) => new stage_response_dto_1.StageResponseDto(stage));
            }
            return new stage_response_dto_1.StageResponseDto(data);
        }));
    }
};
exports.StageTransformInterceptor = StageTransformInterceptor;
exports.StageTransformInterceptor = StageTransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], StageTransformInterceptor);
//# sourceMappingURL=stage-transform.interceptor.js.map