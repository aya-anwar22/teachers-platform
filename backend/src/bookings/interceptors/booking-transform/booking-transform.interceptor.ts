import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable , map} from 'rxjs';
import { BookingResponseDto } from 'src/bookings/dto/booking-response.dto';

@Injectable()
export class BookingTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) =>{
        if(Array.isArray(data)){
          return data.map((booking) => new BookingResponseDto(booking));
        }
        return new BookingResponseDto(data)
      })
    );
  }
}
