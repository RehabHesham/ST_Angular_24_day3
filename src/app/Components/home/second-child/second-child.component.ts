import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css'],
})
export class SecondChildComponent implements OnInit {
  myData: string = 'second child data';

  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  sendData() {
    //this.myEvent.emit(this.myData);
  }

  constructor() {
    console.log('Component life cycle');
    console.log('1- constructor');
  }
  ngOnInit() {
    console.log('Component life cycle');
    console.log('2- onInit');
    this.myEvent.emit(this.myData);
  }
}
