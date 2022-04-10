import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicencePlateNumber } from './shared/navbar/licence_plate_number';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  licenceNumberUrl = "https://picsum.photos/200/300/?random";
  checkRegistrationUrl = "http://127.0.0.1:8000/check/";
  imageFromDjangoUrl = "http://127.0.0.1:8000/checkImage/"

  constructor(private httpClient: HttpClient) { }

  getImageFromDjango(): Observable<Blob> {
    return this.httpClient.get(this.imageFromDjangoUrl, { responseType: 'blob' });
  }

  getLicencePlateNumber(): Observable<any>{
    return this.httpClient.get(this.imageFromDjangoUrl, {responseType: 'text'});
  }

  checkRegistration(licence_number: string): Observable<any> {
    return this.httpClient.get(this.checkRegistrationUrl+licence_number, {responseType: 'text'});
  }

}
