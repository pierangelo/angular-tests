import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Page1ProxyService} from '../page1-proxy.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})
export class TableResultComponent implements OnInit {


  // @Input()
  // set data(value: any) {
  //   if (value) {
  //     this.dataSource.data = value;
  //   }
  // }
  /**
    * Displayed columns of page1 component
    */
  displayedColumns: string[] = ['id', 'albumId', 'thumbnailUrl', 'url'];
  /**
   * Data source of page1 component
   */

  dataSource = new MatTableDataSource();
  /**
   * View child of paginator
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private proxy: Page1ProxyService) {
    this.proxy.photosList$.pipe(takeUntilDestroyed()).subscribe(result => {
      if (result) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = result;
      }
    });

  }

  ngOnInit() {
  }

}
