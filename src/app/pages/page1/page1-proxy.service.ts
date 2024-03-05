import {Injectable, OnDestroy} from '@angular/core';
import {Page1StateDataService} from 'src/app/state/page1-state-data.service';

@Injectable()
export class Page1ProxyService implements OnDestroy {


  /**
   * Photos list$ of page1 proxy service
   */
  photosList$ = this.model.photosList$;

  constructor(private model: Page1StateDataService) {
    console.log("Page1ProxyService on");
  }
  ngOnDestroy(): void {
    console.log("Page1ProxyService detroyed");
  }

  /**
   * Gets photos
   */
  getPhotos() {
    this.model.getPhotosData();

  }


  /**
   * Clears photos
   */
  clearPhotos() {
    this.photosList$.next([]);
  }
}
