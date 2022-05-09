import { Paginator } from './../models/paginator.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.model';
export interface QueryModel {
  name: string;
  startDate: string;
  endDate: string;
  isSuccessful: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class LaunchingService {
  url = 'https://api.spacexdata.com/v4';
  itemsOnPage = 20;
  constructor(private http: HttpClient) {}
  getAllLaunches(page: number): Observable<Paginator<Launch>> {
    return this.http.post<Paginator<Launch>>(`${this.url}/launches/query`, {
      options: {
        page: 1,
        limit: this.itemsOnPage,
      },
    });
  }
  getLaunchesByQuerry(queryParams: QueryModel) {
    return this.http.post(`${this.url}/launches/query`, queryParams);
  }
}
