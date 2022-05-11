import { Injectable } from '@angular/core';
import { ImageItem } from 'ng-gallery';
import { ImageInput } from './photo-gallery.component';

@Injectable({
  providedIn: 'root',
})
export class PhotoGalleryService {
  constructor() {}
  getImagesArray(images: ImageInput): ImageItem[] {
    const imgOutput = [...images.rocketImg, images.launchImg.large];
    images.launchpadImg.large.forEach((image) => {
      imgOutput.push(image);
    });
    const imagesArray: ImageItem[] = [];
    imgOutput.forEach((image) => {
      imagesArray.push(new ImageItem({ src: image, thumb: image }));
    });

    return imagesArray;
  }
}
