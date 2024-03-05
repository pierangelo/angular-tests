import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuBarModule} from './components/menu-bar/menu-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule
  ],
  declarations: [],
  exports: [MenuBarModule]
})
export class SharedModule { }
