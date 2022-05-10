import { Launchpad } from './../../../shared/models/launchpad.model';
import { Rocket } from './../../../shared/models/rocket.model';
import { Launch } from './../../../shared/models/launch.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
})
export class LaunchDetailsComponent implements OnInit {
  @Input() launch!: Launch;
  @Input() rocket!: Rocket;
  @Input() launchpad!: Launchpad;
  constructor() {}

  ngOnInit(): void {}
}
