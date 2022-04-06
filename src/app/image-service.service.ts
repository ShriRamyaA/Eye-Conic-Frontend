import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  licencePlateUrl = "https://picsum.photos/200/300/?random";

  constructor(private httpClient: HttpClient) { }

  getImage(): Observable<Blob> {
    return this.httpClient.get(this.licencePlateUrl, { responseType: 'blob' });
  }

}
