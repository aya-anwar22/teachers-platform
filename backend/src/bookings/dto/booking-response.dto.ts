export class BookingResponseDto {
  id: string;
  studentName: string;
  studentPhone: string;
  stageId: string;
  stageName: string; // ✅ ضفتيها هنا
  status: string;

  constructor(booking: any) {
    this.id = booking._id;
    this.studentName = booking.studentName;
    this.studentPhone = booking.studentPhone;

    // ObjectId
    this.stageId = booking.stageId?._id ?? booking.stageId;

    // Stage Name
    this.stageName = booking.stageId?.name ?? '';

    this.status = booking.status;
  }
}
