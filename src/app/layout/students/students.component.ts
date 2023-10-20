import { Component } from '@angular/core';
import { students_Data } from 'src/shareData/studentData';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  studentData = students_Data;
  

}
