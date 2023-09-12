import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[]

  @Output()
  public onNewDelete = new EventEmitter<string>()

  onDelete(id?:string):void{

    if(!id) return
    this.onNewDelete.emit(id)

  }
}
