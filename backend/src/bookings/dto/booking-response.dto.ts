export class BookingResponseDto {
  id: string;
  studentName: string;
  studentPhone: string;
  stageId: string;
  stageName: string; 
  gradeName: string;
  status: string;

  constructor(booking: any) {
    this.id = booking._id;
    this.studentName = booking.studentName;
    this.studentPhone = booking.studentPhone;

    // ObjectId
    this.stageId = booking.stageId?._id ?? booking.stageId;

    // Stage Name
    this.stageName = booking.stageId?.name ?? '';

    this.gradeName = booking.stageId?.gradeId?.name ?? '';

    this.status = booking.status;
  }
}
