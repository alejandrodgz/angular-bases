import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
 
@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacterEmit:EventEmitter<number> = new EventEmitter()

  @Output()
  public onDeleteCharacterById:EventEmitter<string> =new EventEmitter()

  @Input()
  public CharacterList:Character[] =[
    {
      id:uuid(),
      name:'trunks',
      power: 20
    }
  ]

  onDeleteCharacter(index:number){
    this.onDeleteCharacterEmit.emit(index)
  }

  deleteCharacterByIds(id:string | undefined){

    if(id === undefined) return
    
    this.onDeleteCharacterById.emit(id)
  }

}