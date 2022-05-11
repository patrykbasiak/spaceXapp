import { PhotoGalleryService } from './photo-gallery.service';
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
  constructor(private photoService: PhotoGalleryService) {}

  ngOnInit(): void {
    this.imageItems = this.photoService.getImagesArray(this.images);
  }
}
