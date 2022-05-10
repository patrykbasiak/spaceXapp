import { Launch } from './../../../../shared/models/launch.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.scss']
})
export class LaunchItemComponent implements OnInit {
  @Input() launch!: Launch;
  constructor() { }

  ngOnInit(): void {
    
  }

}
