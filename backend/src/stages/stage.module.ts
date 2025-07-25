import { Module } from '@nestjs/common';
import { StagesController } from './stages.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Stage, StageSchema } from './stage.schema';
import { StagesService } from './stages.service';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Stage.name, schema: StageSchema}])
  ],
  exports: [MongooseModule],
  controllers: [StagesController],
  providers:[StagesService]
})
export class StageModule {}
