import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page2Component} from './page2.component';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  declarations: [Page2Component],
  exports: [Page2Component]
})
export class Page2Module { }
