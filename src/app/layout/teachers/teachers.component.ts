import { Component } from '@angular/core';
import { teachers_Data } from 'src/shareData/teacherData';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {

  teachersData = teachers_Data;
}
