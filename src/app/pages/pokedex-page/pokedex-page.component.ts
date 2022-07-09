import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {

  pokemons: Pokemon[] = [];

  pokemonDetail: Pokemon = new Pokemon('','','');

  constructor( private pokeService: PokedexService ) { }

  ngOnInit(): void {
    this.pokemons = this.pokeService.getPokemons();
    this.pokemonDetail = this.pokemons[0];

  }

  onReceivePokemon(pokemon: Pokemon): void {
    this.pokemonDetail = pokemon;
  }

}
