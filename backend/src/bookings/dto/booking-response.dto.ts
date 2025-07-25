export class BookingResponseDto {
    id:string;
    studentName: string;
    studentPhone: string;
    stageId: string;
    status:string;

    constructor(booking: any){
        this.id = (booking as any)._id;
        this.studentName = booking.studentName;
        this.studentPhone = booking.studentPhone;
        this.stageId = booking.stageId;
        this.status = booking.status;


    }
}