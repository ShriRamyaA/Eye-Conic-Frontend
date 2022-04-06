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
       this.landingImage = false;
       this.isImageLoading = true;
       this.imageService.getImage().subscribe(data => {
         this.createImageFromBlob(data);
         this.isImageLoading = false;
       }, error => {
         this.isImageLoading = false;
         this.errorPage = true;
         console.log(error);
       });
   }
}
