import { Launch } from './../../../shared/models/launch.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllLaunches } from 'src/app/store/launches.actions';
import { getLaunches } from 'src/app/store/launches.selctors';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
})
export class LaunchesListComponent implements OnInit {
  launchesList$!: Observable<Launch[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllLaunches({ page: 2 }));
    this.launchesList$ = this.store
      .select(getLaunches)
      .pipe(map((launchesPaginator) => launchesPaginator?.docs));
  }
}
