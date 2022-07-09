import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons: Pokemon[] = [];

  constructor() { }
}
