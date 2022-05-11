import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-description',
  templateUrl: './launch-description.component.html',
  styleUrls: ['./launch-description.component.scss']
})
export class LaunchDescriptionComponent implements OnInit {
  @Input() description!:[string, string, string];
  constructor() { }

  ngOnInit(): void {
  }

}
