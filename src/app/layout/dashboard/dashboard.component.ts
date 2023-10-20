import { Component } from '@angular/core';
import { cardData } from 'src/shareData/dashboardData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { 

  card_data = cardData;

}
