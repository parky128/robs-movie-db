import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieRouteResolver } from './movie-routing.resolver';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: {
      movie: MovieRouteResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MovieRouteResolver
  ]
})

export class MovieRoutingModule { }
