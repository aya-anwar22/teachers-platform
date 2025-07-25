export class StageResponseDto {
    id: string;
    name:string;
    gradeId:string;
    isDeleted: boolean;
    deletedAt: Date | null;

    constructor(stage: any){
        this.id = (stage as any)._id
        this.name = stage.name;
        this.gradeId = stage.gradeId;
        this.isDeleted = stage.isDeleted;
        this.deletedAt = stage.deletedAt;
    }
}