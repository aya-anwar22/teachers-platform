export interface Stage{
  id?:string;
  name:string;
  isDeleted?:boolean;
  deletedAt?:Date
}
export interface Grade{
  _id?:string;
  name:string;
  isDeleted?:boolean;
  deletedAt?:Date;
    stages?: Stage[];

}