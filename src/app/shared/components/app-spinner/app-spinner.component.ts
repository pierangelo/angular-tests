import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Component({
  selector: 'app-app-spinner',
  templateUrl: './app-spinner.component.html',
  styleUrls: ['./app-spinner.component.css'],

})
export class AppSpinnerComponent implements OnInit {

  constructor(public spinnerService: SpinnerService) { }

  ngOnInit() {
  }

}
