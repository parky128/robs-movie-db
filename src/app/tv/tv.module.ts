import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatExpansionModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';

import { TvComponent } from './tv.component';
import { TvRoutingModule } from './tv-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    TvRoutingModule
  ],
  declarations: [
    TvComponent
  ],
  exports: [TvComponent]
})
export class TvModule { }
