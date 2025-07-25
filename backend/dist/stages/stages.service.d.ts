import { Stage, StageDocument } from './stage.schema';
import { Model } from 'mongoose';
import { CreateStageDto } from './dto/create-stage.dto';
export declare class StagesService {
    private stageModel;
    constructor(stageModel: Model<StageDocument>);
    create(data: CreateStageDto): Promise<Stage>;
    findAll(): Promise<StageDocument[]>;
    findById(id: string): Promise<StageDocument>;
    update(id: string, data: CreateStageDto): Promise<StageDocument>;
    softDelete(id: string): Promise<StageDocument>;
}
