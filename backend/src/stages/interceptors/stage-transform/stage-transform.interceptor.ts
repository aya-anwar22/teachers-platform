import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable , map} from 'rxjs';
import { StageResponseDto } from 'src/stages/dto/stage-response.dto';
import { Stage } from 'src/stages/stage.schema';

@Injectable()
export class StageTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    return next.handle().pipe(
      map((data) =>{
        if(Array.isArray(data)){
          return data.map((stage) => new StageResponseDto(stage));
        }
        return new StageResponseDto(data)
      })
    );
  }
}
