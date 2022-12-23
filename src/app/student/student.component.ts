import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() acceptMsgChild:string
  @Output() myOutPut: EventEmitter<string> = new EventEmitter()
  MsgFromChild= 'Message from Child'
  
  ngOnInit(){
    console.log(this.acceptMsgChild)
  }

  sendValue(){
    this.myOutPut.emit(this.MsgFromChild);
  }
}
