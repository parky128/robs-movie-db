import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

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
    PersonRoutingModule,
    TranslateModule
  ],
  declarations: [
    PersonComponent
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
