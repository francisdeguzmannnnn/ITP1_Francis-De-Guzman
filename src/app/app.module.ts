import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { RegistrationModule } from './registration/registration.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ScreenComponent } from './components/screen/screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { TeachersModule } from './layout/teachers/teachers.module';
import { StudentsModule } from './layout/students/students.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    RegistrationModule,
    NgbModule,
    DashboardModule,
    TeachersModule,
    StudentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
