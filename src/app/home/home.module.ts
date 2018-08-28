import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
