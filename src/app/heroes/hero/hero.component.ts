import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name:string = 'Ironman'
  public age:number=45

  get capitalizedName():string{
    return this.name.toUpperCase()
  }
  public nameChange(newName:string){
    this.name = newName
  }

  changeName():void{
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 23
  }

  reset():void{
    this.name= 'Ironman'
    this.age = 45
  }


}
