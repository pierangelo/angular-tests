import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page1Component} from './page1.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {TableResultComponent} from './table-result/table-result.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  declarations: [Page1Component, TableResultComponent],
  exports: [Page1Component]

})
export class Page1Module { }
