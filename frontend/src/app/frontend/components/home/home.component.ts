import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { GradeComponent } from '../grade/grade.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, GradeComponent],
    standalone: true,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
