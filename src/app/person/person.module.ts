import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { PersonComponent } from './person.component';
import {PersonRoutingModule} from './person-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonComponent
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
