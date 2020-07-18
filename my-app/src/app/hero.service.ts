import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /*
  // synchronous
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  // make it async using observables
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
