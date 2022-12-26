import { Component } from '@angular/core';
import { service1 } from '../service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  constructor(private serv1:service1){

  }
  sendDataC1(msg){
    console.log(msg)
    this.serv1.myevent.emit(msg)
  }
}
