import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';

import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatListModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonComponent
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
