import { IsNotEmpty, IsString , IsMongoId } from "class-validator";
export class CreateStageDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsMongoId()
    @IsNotEmpty()
    gradeId: string
}