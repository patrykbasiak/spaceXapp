import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LaunchingService } from 'src/app/shared/services/launching.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(
    private fb: FormBuilder,
    private launchingService: LaunchingService
  ) {}
  searchForm = this.fb.group({
    launchName: [null],
    startDate: [null],
    endDate: [null],
    success: [null],
  });

  search() {
    this.launchingService
      .getLaunchesByQuerry({
        startDate: this.searchForm.controls.startDate.value,
        endDate: this.searchForm.controls.endDate.value,
        name: this.searchForm.controls.launchName.value,
        success: this.searchForm.controls.success.value
      })
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
