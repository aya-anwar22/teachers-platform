"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingResponseDto = void 0;
class BookingResponseDto {
    id;
    studentName;
    studentPhone;
    stageId;
    status;
    constructor(booking) {
        this.id = booking._id;
        this.studentName = booking.studentName;
        this.studentPhone = booking.studentPhone;
        this.stageId = booking.stageId;
        this.status = booking.status;
    }
}
exports.BookingResponseDto = BookingResponseDto;
//# sourceMappingURL=booking-response.dto.js.map