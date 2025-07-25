import{
    CallHandler, ExecutionContext,
    Injectable, NestInterceptor
} from '@nestjs/common'
import { Observable, map } from 'rxjs'
import { GradeResponseDto } from '../dto/grade-response.dto'

@Injectable()
export class GradeTransformInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
        map((data) =>{
            if(Array.isArray(data)){
                return data.map((grade)=> new GradeResponseDto(grade))
            }
            return new GradeResponseDto(data)
        })
    );        
    }
}