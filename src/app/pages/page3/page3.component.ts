import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatPaginator} from '@angular/material/paginator';
import {Page3StateDataService} from 'src/app/state/page3-state-data.service';
import {Page3ProxyService} from './page3-proxy.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  providers: [Page3ProxyService]
})
export class Page3Component implements OnInit {
  /**
     * Displayed columns of page1 component
     */
  displayedColumns: string[] = ['thumbnailUrl', 'url', 'id', 'albumId'];
  /**
   * Data source of page1 component
   */
  dataSource = new MatTableDataSource();
  /**
   * View child of paginator
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private proxy: Page3StateDataService) {
    this.initSubscription();
  }

  /**
   * on init
   */
  ngOnInit() {

  }

  /**
  * Loads photos
  */
  loadPhotos() {
    this.proxy.getPhotosData3();
  }


  private initSubscription() {
    this.proxy.photosList$.pipe(takeUntilDestroyed()).subscribe(result => {
      if (result) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = result;
      }
    });
  }

}
