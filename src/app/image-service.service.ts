import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  licencePlateUrl = "https://picsum.photos/200/300/?random";
  checkRegistrationUrl = "http://127.0.0.1:8000/check/";

  constructor(private httpClient: HttpClient) { }

  getImage(): Observable<Blob> {
    return this.httpClient.get(this.licencePlateUrl, { responseType: 'blob' });
  }

  checkRegistration(licence_number: string): Observable<any> {
    return this.httpClient.get(this.checkRegistrationUrl+licence_number, {responseType: 'text'});
  }

}
