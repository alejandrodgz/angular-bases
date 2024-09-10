import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dgz.service';

@Component({
    selector: 'app-dgz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
    constructor(private dbzService:DbzService) { }

    get characters(): Character[]{
        return [...this.dbzService.characters]
    }

    deleteCharacterById(id:string):void{
        this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character:Character):void{
        this.dbzService.onNewCharacter(character)
    }
    

    ngOnInit() { }

}