import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { QueryModel } from 'src/app/shared/services/launching.service';
import {
  getAllLaunches,
  getAllLaunchesByQuery,
} from 'src/app/store/launches.actions';
import { Constants } from 'src/app/shared/constants';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private fb: FormBuilder, private store: Store) {}
  pageSize = Constants.paginatorConstants.defaultPageSize;
  isSearchActive: boolean = false;
  searchForm = this.fb.group({
    launchName: [null],
    startDate: [null],
    endDate: [null],
    success: [null],
  });

  onSearch() {
    const query: QueryModel = {
      startDate: this.searchForm.controls.startDate.value,
      endDate: this.searchForm.controls.endDate.value,
      name: this.searchForm.controls.launchName.value,
      success: this.searchForm.controls.success.value,
    };
    this.store.dispatch(
      getAllLaunchesByQuery({ query, page: 1, size: this.pageSize })
    );
    this.isSearchActive = true;
  }
  clear() {
    this.searchForm.reset();
    this.store.dispatch(getAllLaunches({ page: 1, size: this.pageSize }));
    this.isSearchActive = false;
  }
}
