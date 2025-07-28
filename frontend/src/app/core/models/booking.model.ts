export interface Booking {
  _id?: string;
  studentName: string;
  studentPhone: string;
  stageId: any;
  stageName?: string; // ✅ Optional لأن مش دايمًا بيدخل مع البيانات
  status?: string;
}
