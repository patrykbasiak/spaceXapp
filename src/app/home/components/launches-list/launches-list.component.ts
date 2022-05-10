import { Launch } from './../../../shared/models/launch.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllLaunches } from 'src/app/store/launches.actions';
import { getLaunches } from 'src/app/store/launches.selctors';
import { Paginator } from 'src/app/shared/models/paginator.model';
import { PageEvent } from '@angular/material/paginator';
import { Constants } from 'src/app/shared/constants';
@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
})
export class LaunchesListComponent implements OnInit {
  pageSize = Constants.paginatorConstants.defaultPageSize;
  pageIndex = 0;
  pageSizeOptions = Constants.paginatorConstants.pageSizeOptions;
  launchesList$!: Observable<Paginator<Launch>>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllLaunches({ page: 1, size: this.pageSize }));
    this.launchesList$ = this.store.select(getLaunches);
  }
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log(event);

    this.store.dispatch(
      getAllLaunches({ page: event.pageIndex + 1, size: this.pageSize })
    );
    window.scroll(0, 0);
  }
}
