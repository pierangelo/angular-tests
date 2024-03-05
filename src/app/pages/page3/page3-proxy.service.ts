import {Injectable} from '@angular/core';
import {Page3StateDataService} from 'src/app/state/page3-state-data.service';

@Injectable()
export class Page3ProxyService {

  /**
   * Photos list$ of page1 proxy service
   */
  photosList$ = this.model.photosList$;

  constructor(private model: Page3StateDataService) {
    console.log("Page2ProxyService on");
  }

  /**
 * Gets photos
 */
  getPhotos3() {
    this.model.getPhotosData3();

  }

  /**
   * Clears photos
   */
  clearPhotos() {
    this.photosList$.next([]);
  }
}
