import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
