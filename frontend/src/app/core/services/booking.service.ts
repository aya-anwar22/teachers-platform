import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = `${environment.apiUrl}/booking`;
  constructor(private http: HttpClient) { }

  createBooking(booking: Booking):Observable<Booking>{
    return this.http.post<Booking>(this.apiUrl, booking)
  }
}
