import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { get } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('booking')
export class BookingsController {
    constructor(private readonly bookingService: BookingsService){}
    @Post()
    create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    findAll(){
        return this.bookingService.findAll();
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
