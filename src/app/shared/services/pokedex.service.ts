import { Injectable } from '@angular/core';
import { POKEMONS } from '../mocks/pokemons-mock';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokemons: Pokemon[] = POKEMONS;

  constructor() { }

  getPokemons(): Pokemon[] {
    return this.pokemons
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.unshift(pokemon);
  }
  
}
