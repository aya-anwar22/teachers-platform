import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsController {
    private readonly bookingService;
    constructor(bookingService: BookingsService);
    create(createBookingDto: CreateBookingDto): Promise<import("./booking.schema").Booking>;
    findAll(): Promise<import("./booking.schema").BookingDocument[]>;
    findById(id: string): Promise<import("./booking.schema").BookingDocument[]>;
    updateStatus(id: string, status: string): Promise<import("./booking.schema").BookingDocument>;
}
