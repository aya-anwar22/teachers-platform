import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Grade } from '../grades/grade.schema';

export type StageDocument = Stage & Document;
@Schema({timestamps: true})

export class Stage{
    @Prop({required: true, unique: true})
    name: string;

    @Prop({ type: Types.ObjectId, ref: Grade.name, required: true})
    gradeId:Types.ObjectId

    @Prop({default: false})
    isDeleted:boolean;

    @Prop({ type: String, default: null })
    deletedAt: Date | null
}

export const StageSchema = SchemaFactory.createForClass(Stage);