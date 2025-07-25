import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './booking.schema';

@Injectable()
export class BookingsService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}

  async create(data: any): Promise<Booking> {
    const booking = new this.bookingModel(data); 
    return booking.save();
  }

  async findAll(): Promise<BookingDocument[]> {
    return this.bookingModel.find().exec();
  }

  async findById(id: string): Promise<BookingDocument> {
    const booking = await this.bookingModel.findById(id).exec();
    if(!booking) throw new NotFoundException('Booking not found')
    return booking
  }

async updateStatus(id: string, status: string): Promise<BookingDocument> {
  const booking = await this.bookingModel.findByIdAndUpdate(
    id,
    { status: status },
    { new: true }
  ).exec();

  if (!booking) throw new NotFoundException('Booking not found');

  return booking;
}




}
