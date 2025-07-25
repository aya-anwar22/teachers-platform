import { StagesService } from './stages.service';
import { CreateStageDto } from './dto/create-stage.dto';
export declare class StagesController {
    private readonly stagesService;
    constructor(stagesService: StagesService);
    create(createStageDto: CreateStageDto): Promise<import("./stage.schema").Stage>;
    findAll(): Promise<import("./stage.schema").StageDocument[]>;
    findById(id: string): Promise<import("./stage.schema").StageDocument>;
    update(id: string, updateStageDto: CreateStageDto): Promise<import("./stage.schema").StageDocument>;
    delete(id: string): Promise<import("./stage.schema").StageDocument>;
}
