import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  /**
   * Broadcast listener of event bus service
   */
  private _broadcastListener: Subject<EventBus> = new Subject<EventBus>();

  broadcastListener$ = this._broadcastListener.asObservable();

  /**
   * Photos get of event bus service
   */
  static PHOTOS_GET_LIST: string = "PHOTOS_GET";
  /**
   * Photos clear list of event bus service
   */
  static PHOTOS_CLEAR_LIST: string = "PHOTOS_CLEAR_LIST";
  /**
   * Photos get list success of event bus service
   */
  static PHOTOS_GET_LIST_SUCCESS: string = "PHOTOS_GET_LIST_SUCCESS";




  constructor() {
    console.log("eventBusService on");
  }

  /**
   * disptach event
   * @param event
   */
  dispatchEvent(event: EventBus): void {
    this._broadcastListener.next({type: event.type, data: event.data});
    console.log('EventBusService - sending  message: ', {type: event.type, data: event.data});
  }

  /**
   * Gets listener
   * @returns
   */
  getListener() {
    return this.broadcastListener$.pipe();
  }

  /**
   * Destroys listener
   */
  destroyListener() {
    this._broadcastListener.unsubscribe();
  }

  /**
   * Gets observers
   * @returns
   */
  getObservers() {
    return this._broadcastListener.observers;
  }
}

/**
 * Event
 */
export class EventBus {
  type!: string;
  data?: any;

}
