import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'app/image-service.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  // Initial Data before scan
  landingImage = true;
  isImageLoading = false;
  errorPage = false;
  licence_number = "7TRR812"
  registered = "NO";
  email = "YES";
  date = "2022-04-10";
  time_hr = "09";
  time_min = "41";
  email_time = "2022-04-10 09:41";
  constructor(private imageService: ImageServiceService) { }

  ngOnInit() {
  }

  // On click of 'Scan' trigger this function
  scanImage() {
    this.errorPage = false;
    this.landingImage = false;
    this.isImageLoading = true;
    // Call checkImage() function from Image Service which in turn sends a request to Django application
    this.imageService.checkImage().subscribe(data => {
      console.log(data);
      // Extract data from json object returned from Django application
      this.licence_number = data.license;
      this.registered = data.userValidation.toUpperCase();
      this.email = data.email.toUpperCase();
      this.email_time = data.day + ' ' + data.time_hr + ':' + data.time_min;
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      this.errorPage = true;
      console.log(error);
    });
  }
}
