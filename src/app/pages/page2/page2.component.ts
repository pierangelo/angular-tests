import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Page2ProxyService} from './page2-proxy.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  providers: [Page2ProxyService]
})
export class Page2Component implements OnInit {

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

  constructor(private proxy: Page2ProxyService) {

    proxy.photosList$.pipe(takeUntilDestroyed()).subscribe(result => {
      if (result) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = result;
      }
    });

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
    this.proxy.getPhotos();
  }
}
