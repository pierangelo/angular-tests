import {SpinnerService} from './../shared/components/app-spinner/spinner.service';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Page1StateDataService {


  /**
   * Photos list$ of page1 state data service
   */
  photosList$: BehaviorSubject<[]> = new BehaviorSubject([]);

  /**
   * baseurl
   */
  private baseUrl: string = "https://jsonplaceholder.typicode.com/";
  constructor(private httpClient: HttpClient, private spinnerService: SpinnerService) {
    console.log("Page1StateDataService on");
  }

  /**
   * Gets photos data
   */
  getPhotosData() {
    this.spinnerService.start();
    this.httpClient.get<[]>(this.baseUrl + "/photos").subscribe({
      next: (result: []) => {
        if (result) {
          this.photosList$.next(result);
        }
      },
      error: error => {
        console.error("Page4StateDataService getPhotosData:", error);
      },
      complete: () => {
        this.spinnerService.stop();
      },
    });
  }


}
