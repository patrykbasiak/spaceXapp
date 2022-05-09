import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchPageComponent } from './pages/launch-page/launch-page.component';


@NgModule({
  declarations: [
    LaunchPageComponent
  ],
  imports: [
    CommonModule,
    LaunchRoutingModule
  ]
})
export class LaunchModule { }
