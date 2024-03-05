import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Page2StateDataService {
  /**
    * Photos list$ of page1 state data service
    */
  photosList$: BehaviorSubject<[]> = new BehaviorSubject([]);

  /**
   * baseurl
   */
  private baseUrl: string = "https://jsonplaceholder.typicode.com/";
  constructor(private httpClient: HttpClient) {
    console.log("Page2StateDataService on");
  }


  getPhotosData2() {

    this.httpClient.get<[]>(this.baseUrl + "/photos").subscribe({
      next: (result: []) => {
        if (result) {
          this.photosList$.next(result);
        }
      },
      error: error => {
        console.error("Page2StateDataService getPhotosData:", error);
      }
    });
  }
}
