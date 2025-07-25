import { Module } from '@nestjs/common';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Grade, GradeSchema } from './grade.schema';
import { Stage, StageSchema } from '../stages/stage.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Grade.name, schema:GradeSchema},
       { name: Stage.name, schema: StageSchema },
    ])
  ],
  controllers: [GradesController],
  providers: [GradesService]
})
export class GradesModule {}
