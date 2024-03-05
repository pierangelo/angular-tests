import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page1Module} from './page1/page1.module';
import {Page2Component} from './page2/page2.component';
import {Page2Module} from './page2/page2.module';
import {Page3Module} from './page3/page3.module';
import {InfoModule} from './info/info.module';

@NgModule({
  imports: [
    CommonModule,
    Page1Module,
    Page2Module,
    Page3Module,
    InfoModule
  ],
  declarations: [],
  exports: [Page1Module,
    Page2Module,
    Page3Module,
    InfoModule]

})
export class PagesModule { }
