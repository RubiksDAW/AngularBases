import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters: Character[] = [{
    id:uuid(),
    name:'Krilin',
    power:1000,

  },{
    id:uuid(),
    name:'Goku',
    power:9000
  },{
    id:uuid(),
    name:'Trunks',
    power:2000
  }]

  public onNewCharacter(character: Character):void{
    const newCharacter = {id:uuid(), ...character}
    this.characters.push(newCharacter)
  }


  public onNewDelete(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
}

}

