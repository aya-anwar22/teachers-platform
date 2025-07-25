import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Grade } from '../../../core/models/grade.model';
import { GradesService } from '../../../core/services/grades.service';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './detailsgrade.component.html',
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./detailsgrade.component.scss']
})
export class DetailsgradeComponent implements OnInit {
  grade: Grade | null = null;
  bookingForm!: FormGroup;
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(
    private route: ActivatedRoute,
    private gradeService: GradesService,
    private bookingService: BookingService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gradeService.getGradeById(id).subscribe({
        next: (data) => {
          this.grade = data;
          console.log(data);
        },
        error: (err) => {
          console.error('Error fetching grade details:', err);
        }
      });
    }

    this.bookingForm = this.fb.group({
      studentName: ['', Validators.required],
      studentPhone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
      stageId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.invalid) {
      this.showAlertMessage('يرجى ملء جميع الحقول المطلوبة بشكل صحيح', 'error');
      return;
    }

    const bookingData = {
      studentName: this.bookingForm.value.studentName,
      studentPhone: this.bookingForm.value.studentPhone,
      stageId: this.bookingForm.value.stageId,
    };

    this.bookingService.createBooking(bookingData).subscribe({
      next: (res) => {
        console.log('Booking created successfully:', res);
        this.showAlertMessage('تم الحجز بنجاح! سنتصل بك قريباً لتأكيد الحجز', 'success');
        this.bookingForm.reset();
      },
      error: (err) => {
        console.error('Error creating booking:', err);
        const errorMessage = err.error?.message || 'حدث خطأ أثناء محاولة الحجز، يرجى المحاولة مرة أخرى';
        this.showAlertMessage(errorMessage, 'error');
      }
    });
  }

  private showAlertMessage(message: string, type: 'success' | 'error'): void {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    
    // إخفاء التنبيه تلقائياً بعد 5 ثواني
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}