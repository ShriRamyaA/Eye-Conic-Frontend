import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicencePlateNumber } from './shared/navbar/licence_plate_number';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  // licenceNumberUrl = "https://picsum.photos/200/300/?random";
  // checkRegistrationUrl = "http://127.0.0.1:8000/check/";
  checkImageUrl = "http://127.0.0.1:8000/checkImage/"

  constructor(private httpClient: HttpClient) { }

  // getImageFromDjango(): Observable<Blob> {
  //   return this.httpClient.get(this.imageFromDjangoUrl, { responseType: 'blob' });
  // }


  checkImage(): Observable<LicencePlateNumber>{
    return this.httpClient.get<LicencePlateNumber>(this.checkImageUrl);
  }

}
