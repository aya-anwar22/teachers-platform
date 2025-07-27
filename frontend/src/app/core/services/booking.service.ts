
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  // private apiUrl = `${environment.apiUrl}/booking`;
  private apiUrl = `http://localhost:3000/booking`;

  constructor(private http: HttpClient) { }

  getBooking(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this.apiUrl)
  }

    createBooking(booking: Booking):Observable<Booking>{
    return this.http.post<Booking>(this.apiUrl, booking)
  }
}
