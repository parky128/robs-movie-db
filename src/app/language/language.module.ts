import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LanguageComponent } from './language.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LanguageComponent
  ],
  exports: [LanguageComponent]
})
export class LanguageModule { }
