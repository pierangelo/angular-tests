import {Component, OnDestroy, OnInit} from '@angular/core';
import {Page1ProxyService} from './page1-proxy.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [Page1ProxyService]

})
export class Page1Component implements OnInit, OnDestroy {



  // dataSource: any;

  constructor(private proxy: Page1ProxyService) {
    // this.proxy.photosList$.pipe(takeUntilDestroyed()).subscribe(result => {
    //   if (result) {

    //     this.dataSource = result;
    //   }
    // });

  }
  ngOnDestroy(): void {
    console.log("Page1Component detroyed");
    //this.proxy.clearPhotos();
  }
  /**
   * on init
   */
  ngOnInit() {
    // this.spinnerService.start();
    // setTimeout(() => {
    //    this.proxy.getPhotos();
    // }, 1000);
  }


  /**
   * Loads photos
   */
  loadPhotos() {
    this.proxy.getPhotos();
  }

}
