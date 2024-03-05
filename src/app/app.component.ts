import {Component} from '@angular/core';
import {SpinnerService} from './shared/components/app-spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  constructor(public spinnerService: SpinnerService) { }
}
