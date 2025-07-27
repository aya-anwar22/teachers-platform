import { Component } from '@angular/core';
import { Booking } from '../../../core/models/booking.model';
import { BookingService } from '../../../core/services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  booking: Booking[] = []
  constructor(private bookingService: BookingService){}

    ngOnInit(): void {
      this.bookingService.getBooking().subscribe({
        next:(data)=>{
          console.log(data)
          this.booking = data
        },
        error:(err) =>{
          console.error('Error fetching booking: ', err)
        }
      })
    }

}
