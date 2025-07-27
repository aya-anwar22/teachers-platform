import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { LayoutComponent } from './frontend/shared/components/layout/layout.component';

export const routes: Routes = [

  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path: '',
        loadComponent: () =>
          import('./frontend/components/home/home.component').then(
            m => m.HomeComponent
          )
      },
      {
        path: 'grades',
        loadComponent: () =>
          import('./frontend/components/grade/grade.component').then(
            m => m.GradeComponent
          )
      },


        {
        path: 'grades/:id',
        loadComponent: () =>
          import('./frontend/components/detailsgrade/detailsgrade.component').then(
            m => m.DetailsgradeComponent
          )
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./frontend/components/feedback/feedback.component').then(
            m => m.FeedbackComponent
          )
      },

      {
        path: 'booking',
        loadComponent: () =>
          import('./frontend/components/booking/booking.component').then(
            m => m.BookingComponent
          )
      },


      {
        path: 'hero',
        loadComponent: () =>
          import('./frontend/components/hero/hero.component').then(
            m => m.HeroComponent
          )
      },
    ]
  },
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      // {
      //   path: 'grades',
      //   loadComponent: () =>
      //     import('./admin/components/grades/grades.component').then(
      //       m => m.GradesComponent
      //     )
      // },
       {
        path: 'booking',
        loadComponent: () =>
          import('./admin/components/booking/booking.component').then(
            m => m.BookingComponent
          )
      },

    ]
  },

];
