import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent {
   public heroNames: string[] = ['Spiderman', 'Hook','Ironman', 'Thor']
    public deletedHero?:string
   public deleteLastHero():void{
    this.deletedHero = this.heroNames.pop()
    console.log(this.deletedHero)
   }
}
