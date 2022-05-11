import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

export interface ImageInput {
  rocketImg: string[];
  launchImg: { small: string; large: string };
  launchpadImg: { large: string[]; small: string[] };
}
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  @Input() images!: ImageInput;
  imageItems!: GalleryItem[];
  constructor() {}

  ngOnInit(): void {
    this.imageItems = this.getImagesArray(this.images);
  }
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
