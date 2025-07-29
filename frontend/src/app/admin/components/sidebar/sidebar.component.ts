import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
   standalone: true, // إذا كنت تستخدم Angular 17+
  imports: [RouterModule], // أضف هذا السطر
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isMobileView = false;
  
  // بيانات المستخدم
  userName = 'أحمد محمد';
  userRole = 'مدير النظام';
  userImage = 'assets/images/user-avatar.png';
  
  // عناصر القائمة
  menuItems = [
    { link: '/dashboard', icon: 'fa-home', text: 'الرئيسية' },
    { link: '/bookings', icon: 'fa-calendar-check', text: 'الحجوزات' },
    { link: '/educational-stages', icon: 'fa-graduation-cap', text: 'المراحل الدراسية' },
    { link: '/classrooms', icon: 'fa-chalkboard', text: 'الصفوف الدراسية' },
    { link: '/students', icon: 'fa-users', text: 'الطلاب' },
    { link: '/lessons', icon: 'fa-book', text: 'الدروس' },
    { link: '/questions', icon: 'fa-question-circle', text: 'الأسئلة' },
    { link: '/discussions', icon: 'fa-comments', text: 'النقاشات' },
    { link: '/settings', icon: 'fa-cog', text: 'الإعدادات' },
    { link: '/logout', icon: 'fa-sign-out-alt', text: 'تسجيل الخروج', class: 'logout-item' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 992;
    if (!this.isMobileView) {
      this.isCollapsed = false;
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    // هنا يمكنك إضافة منطق تسجيل الخروج
    this.router.navigate(['/login']);
  }
}