import { Component } from '@angular/core';
import { service1 } from '../service1.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  constructor(private serve2:service1 ){
    this.serve2.myevent.subscribe((msg)=>
      alert('C2 received ->'+msg)
    )
  }
  captureLog(inputValue){
    console.log(inputValue)
  }
}
