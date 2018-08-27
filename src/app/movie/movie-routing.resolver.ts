import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TmdbMovieService } from '../services/tmdb-movie.service';

@Injectable()
export class MovieRouteResolver implements Resolve<any> {
  constructor(private tmdbMovieService: TmdbMovieService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    return this.tmdbMovieService.getMovie(activateRoute.paramMap.get('id'));
  }
}
