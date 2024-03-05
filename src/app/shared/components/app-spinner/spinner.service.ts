import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  /**
   * Start$  of spinner service
   */
  start$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  start() {
    this.start$.next(true);
  }
  stop() {
    this.start$.next(false);
  }

}
