import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuBarComponent} from './menu-bar.component';
import {Router, RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuBarComponent],
  exports: [MenuBarComponent]
})
export class MenuBarModule { }
