import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    MovieComponent
  ],
  exports: [MovieComponent]
})
export class MovieModule { }
