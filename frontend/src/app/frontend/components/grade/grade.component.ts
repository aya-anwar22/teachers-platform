import { Component, OnInit } from '@angular/core';
import { Grade } from '../../../core/models/grade.model';
import { GradesService } from '../../../core/services/grades.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grade',
   imports: [
    RouterModule,CommonModule
    
  ],
    standalone: true,

  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  grades: Grade[] = [];

  constructor(private gradesService: GradesService) {}

  ngOnInit(): void {
    this.gradesService.getGrades().subscribe({
      next: (data) => {
        console.log(data)
        this.grades = data.filter(g => !g.isDeleted);
      },
      error: (err) => {
        console.error('Error fetching grades:', err);
      }
    });
  }
  
}
