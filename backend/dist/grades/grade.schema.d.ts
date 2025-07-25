export type GradeDocument = Grade & Document;
export declare class Grade {
    name: string;
    isDeleted: boolean;
    deletedAt: Date | null;
}
export declare const GradeSchema: import("mongoose").Schema<Grade, import("mongoose").Model<Grade, any, any, any, import("mongoose").Document<unknown, any, Grade, any> & Grade & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Grade, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Grade>, {}> & import("mongoose").FlatRecord<Grade> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
