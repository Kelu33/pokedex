import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent implements OnInit {

  pokemon: Pokemon = new Pokemon('','','');

  constructor() { }

  ngOnInit(): void {
  }

}
