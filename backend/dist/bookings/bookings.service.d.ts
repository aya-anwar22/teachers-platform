import { Model } from 'mongoose';
import { Booking, BookingDocument } from './booking.schema';
export declare class BookingsService {
    private bookingModel;
    constructor(bookingModel: Model<BookingDocument>);
    create(data: any): Promise<Booking>;
    findAll(): Promise<BookingDocument[]>;
    findById(id: string): Promise<BookingDocument>;
    updateStatus(id: string, status: string): Promise<BookingDocument>;
}
