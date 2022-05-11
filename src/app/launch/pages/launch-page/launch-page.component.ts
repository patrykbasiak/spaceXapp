import { Launchpad } from './../../../shared/models/launchpad.model';
import { Rocket } from './../../../shared/models/rocket.model';
import { LaunchingService } from './../../../shared/services/launching.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Launch } from 'src/app/shared/models/launch.model';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss'],
})
export class LaunchPageComponent implements OnInit {
  
  launchId!: string;
  launch!: Launch;
  data$!: Observable<[Rocket, Launchpad]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private launchingService: LaunchingService
  ) {}

  ngOnInit(): void {
    this.data$ = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.launchingService.getLaunchById(params.id);
        })
      )
      .pipe(
        switchMap((launch: Launch) => {
          this.launch = launch;
          return forkJoin([
            this.launchingService.getRocketById(launch.rocket),
            this.launchingService.getLaunchpadById(launch.launchpad),
          ]);
        })
      );
  }
}
