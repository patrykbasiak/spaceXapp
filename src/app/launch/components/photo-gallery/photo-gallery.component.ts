import { Component, OnInit, Input } from '@angular/core';
import { Rocket } from 'src/app/shared/models/rocket.model';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  @Input() images!: string[];
  constructor() {}

  ngOnInit(): void {}
}
