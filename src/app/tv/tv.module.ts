import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { TvComponent } from './tv.component';
import { TvRoutingModule } from './tv-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TvRoutingModule
  ],
  declarations: [
    TvComponent
  ],
  exports: [TvComponent]
})
export class TvModule { }
