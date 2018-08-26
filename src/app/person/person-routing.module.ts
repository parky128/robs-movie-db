import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person.component';
import { PersonRouteResolver } from './person-routing.resolver';

const routes: Routes = [
  {
    path: 'person/:id',
    component: PersonComponent,
    resolve: {
      person: PersonRouteResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    PersonRouteResolver
  ]
})

export class PersonRoutingModule { }
