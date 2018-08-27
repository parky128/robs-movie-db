import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvComponent } from './tv.component';
import { TvRouteResolver } from './tv-routing.resolver';

const routes: Routes = [
  {
    path: 'tv/:id',
    component: TvComponent,
    resolve: {
      tvShow: TvRouteResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TvRouteResolver
  ]
})

export class TvRoutingModule { }
