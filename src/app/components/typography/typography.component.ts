import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'app/image-service.service';
import 'assets/smtp.js';
declare let Email: any;

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

//   imageToShow: any;
  landingImage = true;
  isImageLoading = false;
  errorPage = false;
  licence_number = "7TRR812"
  registered = "No";
  email = "Yes";
  date = "2022-04-10";
  time_hr="09";
  time_min="41";
  email_time = "2022-04-10 09:41";
  constructor(private imageService : ImageServiceService) { }

  ngOnInit() {
  }

//   createImageFromBlob(image: Blob) {
//     let reader = new FileReader();
//     reader.addEventListener("load", () => {
//        this.imageToShow = reader.result;
//     }, false);
 
//     if (image) {
//        reader.readAsDataURL(image);
//     }
//    }
 
   scanImage() {
      this.errorPage = false;
       this.landingImage = false;
       this.isImageLoading = true;
       this.imageService.checkImage().subscribe(data => {
        console.log(data);
        this.licence_number = data.license;
        this.registered = data.userValidation;
        this.email = data.email;
        this.email_time = data.day+' '+data.time_hr+':'+data.time_min;
         this.isImageLoading = false;
       }, error => {
         this.isImageLoading = false;
         this.errorPage = true;
         console.log(error);
       });
   }
}
