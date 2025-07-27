import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../models/grade.model';
// import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GradesService {

//  private apiUrl = `${environment.apiUrl}/grades`
 private apiUrl = `https://teachers-platform-vhu1.vercel.app/grades`
  

  constructor(private http: HttpClient) {}

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
  }

  getGradeById(id: string): Observable<Grade> {
    return this.http.get<Grade>(`${this.apiUrl}/${id}`);
  }

  createGrade(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, grade);
  }

  updateGrade(id: string, grade: Grade): Observable<Grade> {
    return this.http.patch<Grade>(`${this.apiUrl}/${id}`, grade);
  }

  deleteGrade(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
