import {Injectable} from '@angular/core';
import {Page2StateDataService} from 'src/app/state/page2-state-data.service';

@Injectable()
export class Page2ProxyService {

  /**
   * Photos list$ of page1 proxy service
   */
  photosList$ = this.model.photosList$;

  constructor(private model: Page2StateDataService) {
    console.log("Page2ProxyService on");
  }

  /**
 * Gets photos
 */
  getPhotos() {
    this.model.getPhotosData2();

  }

  /**
   * Clears photos
   */
  clearPhotos() {
    this.photosList$.next([]);
  }
}
