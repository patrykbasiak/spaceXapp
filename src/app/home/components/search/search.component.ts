import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private fb: FormBuilder) {}
  searchForm = this.fb.group({
    launchName: [null],
    startDate: [null],
    endDate: [null],
    isSuccessful: [null],
  });

  search() {
    console.log(this.searchForm.value);
  }
}
