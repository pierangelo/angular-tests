import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Page3StateDataService {

  /**
    * Photos list$ of page1 state data service
    */
  photosList$: BehaviorSubject<[]> = new BehaviorSubject([]);

  /**
   * baseurl
   */
  private baseUrl: string = "https://jsonplaceholder.typicode.com/";
  constructor(private httpClient: HttpClient) {
    console.log("Page3StateDataService on");
  }

  getPhotosData3() {
    this.httpClient.get<[]>(this.baseUrl + "/photos").subscribe({
      next: (result: []) => {
        if (result) {
          this.photosList$.next(result);
        }
      },
      error: error => {
        console.error("Page3StateDataService getPhotosData:", error);
      }
    });
  }
}
