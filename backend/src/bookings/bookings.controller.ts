import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { get } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from '@nestjs/passport';
import { BookingResponseDto } from './dto/booking-response.dto';

@Controller('booking')
export class BookingsController {
    constructor(private readonly bookingService: BookingsService){}
    @Post()
    create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
    }

   @Get()
async findAll() {
  const bookings = await this.bookingService.findAll();
  return bookings.map((booking) => new BookingResponseDto(booking));
}


    @Get(':id')
    findById(@Param('id') id:string){
        return this.bookingService.findAll();
    }

    @Patch(':id')
    updateStatus(
    @Param('id') id: string,
    @Body('status') status: string
    ) {
    return this.bookingService.updateStatus(id, status);
    }




}
