import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent implements OnInit {

  pokemon: Pokemon = new Pokemon('','','');

  pokeForm: FormGroup = this.formBuilder.group({
    name: ['Sna-kat', Validators.required],
    imageUrl: ['https://i.imgur.com/Gql7NOz.jpeg', Validators.required],
    description: ['']
  })

  constructor( 
    private formBuilder: FormBuilder,
    private pokeService: PokedexService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemon = this.pokeForm.value;
  }

  onSubmit(): void {
    if (this.pokeForm.valid) {
      this.pokeService.addPokemon(this.pokeForm.value);
      this.router.navigate(['/']);
    }
  }

  onChange(): void {
    this.pokemon = this.pokeForm.value;
  }

}
