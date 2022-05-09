import { Launch } from './../../../shared/models/launch.model';
import { Observable } from 'rxjs';
import { LaunchingService } from './../../../shared/services/launching.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
})
export class LaunchesListComponent implements OnInit {
  launchesList$!: Observable<Launch[]>;
  constructor(private launchingService: LaunchingService) {}

  ngOnInit(): void {
    this.launchesList$ = this.launchingService.getAllLaunches(10).pipe(
      map((launchesPaginator) => {
        return launchesPaginator.docs;
      })
    );
  }
}
