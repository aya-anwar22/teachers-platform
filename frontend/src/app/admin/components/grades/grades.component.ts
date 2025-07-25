import { Component, OnInit } from '@angular/core';
import { Grade } from '../../../core/models/grade.model';
import { GradesService } from '../../../core/services/grades.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'] 
})
export class GradesComponent implements OnInit {

  grades: Grade[] = [];
  newGradeName: string = '';
  editGrade: Grade | null = null;

  constructor(private gradesService: GradesService) {}
  ngOnInit(): void { 
    this.loadGrades();
  }

  loadGrades() {
    this.gradesService.getGrades().subscribe(data => {
      this.grades = data;
    });
  }

  addGrade() {
    if (this.newGradeName.trim()) {
      this.gradesService.createGrade({ name: this.newGradeName }).subscribe(() => {
        this.newGradeName = '';
        this.loadGrades();
      });
    }
  }

  startEdit(grade: Grade) {
    this.editGrade = { ...grade };
  }

  // updateGrade() {
  //   if (this.editGrade && this.editGrade._id) {
  //     this.gradesService.updateGrade(this.editGrade._id, this.editGrade).subscribe(() => {
  //       this.editGrade = null;
  //       this.loadGrades();
  //     });
  //   }
  // }

  deleteGrade(id: string) {
    this.gradesService.deleteGrade(id).subscribe(() => {
      this.loadGrades();
    });
  }

}
