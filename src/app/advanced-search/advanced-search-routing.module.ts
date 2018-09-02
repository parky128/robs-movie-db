import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvancedSearchComponent } from './advanced-search.component';
import { AdvancedSearchRouteResolver } from './advanced-search-routing.resolver';

const routes: Routes = [
  {
    path: 'advanced-search',
    component: AdvancedSearchComponent,
    resolve: {
      genres: AdvancedSearchRouteResolver
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    AdvancedSearchRouteResolver
  ]
})

export class AdvancedSearchRoutingModule { }
