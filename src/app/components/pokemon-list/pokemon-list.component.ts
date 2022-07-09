import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];

  @Output() pokemonClick: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
