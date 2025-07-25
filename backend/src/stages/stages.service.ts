import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stage, StageDocument } from './stage.schema';
import { Model } from 'mongoose';
import { CreateStageDto } from './dto/create-stage.dto';

@Injectable()
export class StagesService {
    constructor(@InjectModel(Stage.name) private stageModel: Model<StageDocument>){}

    async create(data:CreateStageDto):Promise<Stage>{
        const stage = new this.stageModel(data)
        return stage.save()
    }

    async findAll():Promise<StageDocument[]>{
        return this.stageModel.find().exec();
    }

    async findById(id:string): Promise<StageDocument>{
        const stage = await this.stageModel.findById(id).exec();
        if(!stage){
            throw new NotFoundException(`Stage not found`)
        }
        return stage
    }

    async update(id:string, data: CreateStageDto):Promise<StageDocument>{
        const stage = await this.stageModel.findByIdAndUpdate(id, data, {new: true});
        if(!stage){
            throw new NotFoundException(`Stage not found`)
        }
        return stage
    }

    async softDelete(id: string): Promise<StageDocument> {
    const stage = await this.stageModel.findByIdAndUpdate(
        id,
        { isDeleted: true, deletedAt: new Date() },
        { new: true },
    ).exec();
    if (!stage) throw new NotFoundException('stage not found')
    return stage;
    }
}
