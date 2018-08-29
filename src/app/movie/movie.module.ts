import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatExpansionModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MovieRoutingModule,
    TranslateModule
  ],
  declarations: [
    MovieComponent
  ],
  exports: [MovieComponent]
})
export class MovieModule { }
