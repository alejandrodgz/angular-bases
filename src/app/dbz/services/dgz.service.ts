import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

    public characters:Character[]=[
        {
            id: uuid(),
            name:"Goku",
            power:10000,

        },
        {
            id: uuid(),
            name:"Vegito",
            power: 300000
        },
        {
            id: uuid(),
            name:'krilin',
            power: 340
        }
    ]

    public onNewCharacter(character:Character):void{
        character.id = uuid()
        this.characters.push(character)
    }

    
    public onDeleteCharacter(number:number):void{
        this.characters.splice(number, 1)
    }

    public deleteCharacterById(id:string):void{
        console.log(id)
        this.characters = this.characters.filter(character => character.id !== id)
    }

    
}