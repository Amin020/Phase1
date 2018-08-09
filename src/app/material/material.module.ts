import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
