import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'


export type GradeDocument = Grade & Document;
@Schema({timestamps: true})

export class Grade{
    @Prop({required: true, unique: true})
    name: string

    @Prop({default: false})
    isDeleted:boolean

    @Prop({type: Date, default:null})
    deletedAt: Date | null
}
export const GradeSchema = SchemaFactory.createForClass(Grade);