// dto/grade-with-stages-response.dto.ts
import { Grade } from '../grade.schema';
import { Stage } from '../../stages/stage.schema';

export class GradeWithStagesResponseDto {
  id: string;
  name: string;
  isDeleted: boolean;
  deletedAt: Date | null;
  stages: {
    id: string;
    name: string;
    isDeleted: boolean;
    deletedAt: Date | null;
  }[];

  constructor(grade: Grade, stages: Stage[]) {
    this.id = (grade as any)._id;
    this.name = grade.name;
    this.isDeleted = grade.isDeleted;
    this.deletedAt = grade.deletedAt;
    this.stages = stages.map(stage => ({
      id: (stage as any)._id,
      name: stage.name,
      isDeleted: stage.isDeleted,
      deletedAt: stage.deletedAt,
    }));
  }
}
