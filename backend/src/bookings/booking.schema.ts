import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import {Stage} from '../stages/stage.schema'
export type BookingDocument = Booking & Document;
@Schema( {timestamps: true})
export class Booking{
    @Prop({required:true})
    studentName: string

    @Prop({required:true})
    studentPhone: string

    @Prop({type: Types.ObjectId, ref: Stage.name, required:true})
    stageId: Types.ObjectId

    @Prop({
        default:'pending',
        enum:['pending', 'approved', 'rejected']

    })
    status: string
}

export const BookingSchema = SchemaFactory.createForClass(Booking)