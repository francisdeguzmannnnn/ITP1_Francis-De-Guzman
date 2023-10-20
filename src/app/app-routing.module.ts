import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule),
  },
  {
    path: 'manage/dashboard',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: 'manage/students',
    loadChildren: () => import('./layout/students/students.module').then(mod => mod.StudentsModule),
  },
  {
    path: 'manage/teachers',
    loadChildren: () => import('./layout/teachers/teachers.module').then(mod => mod.TeachersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
