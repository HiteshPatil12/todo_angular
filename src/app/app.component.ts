import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fromParentMsg = 'I am parent component data.'

  title = 'todo';
  task = "";
  tasks = [];
  messageToUser = "";
  drinkName = "";
  counter = 0;
  displayMsg = false;
  scores = [90, 35, 68, 99, 23, 55];
  stockDetails = [
      {
        "company":"",
        "code":"",
        "price":0,
        "indexName":"",
        "confirm":"false",
      }
  ];

  getDataFromChild(e){
    console.log(e)
  }

  constructor(){
    // JSON.stringify(this.stockDetails);
    // console.log(this.stockDetails);
    let taskFronLocalStorage = localStorage.getItem("tasks");
    this.tasks = JSON.parse(taskFronLocalStorage);

    var blink_speed = 2000;
    var t = setInterval(() => {
        if(this.drinkName == "" || this.drinkName == 'Coke' || this.drinkName == undefined){
          this.drinkName = 'Pepsi';
          document.getElementById("drink").innerHTML = this.drinkName;
        }
        else{
          this.drinkName = 'Coke';
          document.getElementById("drink").innerHTML = this.drinkName;
        }
    }, blink_speed);
  }
  
  addTask(task){
    if(task== ""){
      this.messageToUser = "Empty task is not allowed.";
      return;
    }
    else if(this.tasks.includes(task)) {
      this.messageToUser = "Duplicate task.";
      return;
    }
    else{
      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.messageToUser = '';
    }
  }

  removeTask(i: any){
    this.tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  // Counter
  increaseCounter(){
    this.counter = this.counter + 1;
  }
  decreaseCounter(){
    this.counter = this.counter - 1;
  }
  resetCounter(){
    this.counter = 0;
  }

  // Show/Hide text
  toggleText(value){
    console.log(value)
    if(value == 'Show Text'){
      document.getElementById("btnText").innerHTML = 'Hide Text';
      this.displayMsg = true
    }else{
      document.getElementById("btnText").innerHTML = 'Show Text';
      this.displayMsg = false
    }
  }

  // Scores using NGClass
  getClass(value){
    // console.log(value['item']);
    if(value['item'] < 41){
      return 'zeroToFourty'
    }
    else if(value['item'] >= 41 && value['item'] <= 80){
      return 'fourtyoneToEighty'
    }
    else{
      return 'eightyoneToHundred'
    }
  }

  // Scores using getStyle
  getStyle(value){
    // console.log(value['item']);
    if(value['item'] != '' || value['item'] == undefined){
      if(value['item'] < 41){
        return ({"color": "red", "font-size": "24px","font-weight": "600"})
      }
      else if(value['item'] >= 41 && value['item'] <= 80){
        return ({'color': 'rgb(255, 145, 0)','font-size': '16px','font-weight': '600'})
      }
      else if(value['item'] > 80){
        return ({'color': 'rgb(2, 206, 63)','font-size': '32px','font-weight': '600'})
      }
    }
  }

}