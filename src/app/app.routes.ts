import { Routes } from "@angular/router";
import { CreatePokemonPageComponent } from "./pages/create-pokemon-page/create-pokemon-page.component";
import { PokedexPageComponent } from "./pages/pokedex-page/pokedex-page.component";

const ROUTES: Routes = [
    {
        path: '',
        component: PokedexPageComponent
    },
    {
        path: 'create',
        component: CreatePokemonPageComponent
    }
];

export { ROUTES };
