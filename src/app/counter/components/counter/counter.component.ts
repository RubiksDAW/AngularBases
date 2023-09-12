import { Component } from '@angular/core';

@Component({
  selector:"app-counter",
  templateUrl:'./counter.component.html'
})

export class CounterComponent{
  public counter:number = 0;

  public sumar(value:number=1){
    this.counter+=value
  }

  public restar(value:number=1):void{
    this.counter--
  }

  public reset(){
    this.counter=0
  }
}
