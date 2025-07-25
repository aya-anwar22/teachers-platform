import {
  Controller,Get,Post,
  Put, Delete,Param,
  Body,UseInterceptors,
  Patch,
} from '@nestjs/common';
import { StagesService } from './stages.service';
import { CreateStageDto } from './dto/create-stage.dto';

@Controller('stages')
export class StagesController {
    constructor(private readonly stagesService: StagesService){}

    @Post()
    create(@Body() createStageDto: CreateStageDto){
        return this.stagesService.create(createStageDto)
    }

    @Get()
    findAll(){
        return this.stagesService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string){
        return this.stagesService.findById(id)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateStageDto: CreateStageDto){
        return this.stagesService.update(id, updateStageDto)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.stagesService.softDelete(id);
    }

}
