import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { TvComponent } from './tv.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    TvComponent
  ],
  exports: [TvComponent]
})
export class TvModule { }
