import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import {pokemon} from '../models/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ''
  private pokeData:pokemon | any;
  constructor(
    private http : HttpClient
  ) { this.baseURL = environment.pokeApi }

  getPokemon(pokemonName:string):Observable<pokemon>{
    this.pokeData = this.http.get<pokemon>(`${this.baseURL}${pokemonName}`, )
    return this.pokeData
  }

}
