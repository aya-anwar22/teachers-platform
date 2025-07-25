"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingTransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const booking_response_dto_1 = require("../../dto/booking-response.dto");
let BookingTransformInterceptor = class BookingTransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            if (Array.isArray(data)) {
                return data.map((booking) => new booking_response_dto_1.BookingResponseDto(booking));
            }
            return new booking_response_dto_1.BookingResponseDto(data);
        }));
    }
};
exports.BookingTransformInterceptor = BookingTransformInterceptor;
exports.BookingTransformInterceptor = BookingTransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], BookingTransformInterceptor);
//# sourceMappingURL=booking-transform.interceptor.js.map