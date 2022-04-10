import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'app/image-service.service';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  imageToShow: any;
  landingImage = true;
  isImageLoading = false;
  errorPage = false;
  licence_number = "ABC"
  registered = true;
  check = false;

  constructor(private imageService : ImageServiceService) { }

  ngOnInit() {}

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
   }
 
   getImageFromService() {
    this.check = false;
       this.landingImage = false;
       this.isImageLoading = true;
       this.imageService.getLicencePlateNumber().subscribe(data => {
        this.licence_number = data;
        console.log(data);
        // this.displayImageOnUI();
         this.isImageLoading = false;
       }, error => {
         this.isImageLoading = false;
         this.errorPage = true;
         console.log(error);
       });
   }

  //  displayImageOnUI(){
  //   this.imageService.getImageFromDjango().subscribe(data => {
  //     this.createImageFromBlob(data);
  //   }, error => {
  //     console.log(error);
  //   });
  //  }

   validateLicenceNumber() {
     this.check = true;
     console.log(this.licence_number);
     this.imageService.checkRegistration(this.licence_number).subscribe(data => {
        if( data=='yes') this.registered = true;
        else this.registered = false;
        console.log(this.registered);
     })
   }
}
