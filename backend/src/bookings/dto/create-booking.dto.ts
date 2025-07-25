import { IsString, IsNotEmpty, IsMongoId, Matches, isString } from "class-validator";

export class CreateBookingDto{
    @IsString()
    @IsNotEmpty()
    studentName:string

    @IsNotEmpty()
    @Matches(/^[0-9]{10,15}$/, { message: 'Phone must be a valid number' })

    studentPhone: string;


    // @IsMongoId()
    @IsNotEmpty()
    stageId:string

//    @IsString()
//     status:string

}