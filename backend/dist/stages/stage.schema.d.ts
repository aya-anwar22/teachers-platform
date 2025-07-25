import { Document, Types } from 'mongoose';
export type StageDocument = Stage & Document;
export declare class Stage {
    name: string;
    gradeId: Types.ObjectId;
    isDeleted: boolean;
    deletedAt: Date | null;
}
export declare const StageSchema: import("mongoose").Schema<Stage, import("mongoose").Model<Stage, any, any, any, Document<unknown, any, Stage, any> & Stage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Stage, Document<unknown, {}, import("mongoose").FlatRecord<Stage>, {}> & import("mongoose").FlatRecord<Stage> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
