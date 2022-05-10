import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchPageComponent } from './pages/launch-page/launch-page.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { LaunchDescriptionComponent } from './components/launch-description/launch-description.component';


@NgModule({
  declarations: [
    LaunchPageComponent,
    LaunchDetailsComponent,
    PhotoGalleryComponent,
    LaunchDescriptionComponent
  ],
  imports: [
    CommonModule,
    LaunchRoutingModule
  ]
})
export class LaunchModule { }
