import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  parentData: string = 'welcome in parent';

  fromChild: string = 'Waiting Child data';

  getChildData(e: any) {
    this.fromChild = e;
  }
}
