import { Grade } from "../grade.schema";

export class GradeResponseDto{
    id:string;
    name:string;
    isDeleted: boolean;
    deletedAt: Date | null;

    constructor(grade: Grade){
        this.id = (grade as any)._id
        this.name = grade.name;
        this.isDeleted = grade.isDeleted;
        this.deletedAt = grade.deletedAt;

    }
    

}