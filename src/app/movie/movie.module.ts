import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent
  ],
  exports: [MovieComponent]
})
export class MovieModule { }
