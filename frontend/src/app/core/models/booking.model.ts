export interface Stage {
  _id: string;
  name: string;
}

export interface Booking {
  _id?: string;
  studentName: string;
  studentPhone: string;
  stageId: Stage; // ✅ هنا بدل any خليه Stage
  status?: string;
}
