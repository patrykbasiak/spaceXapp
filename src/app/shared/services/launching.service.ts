import { Paginator } from './../models/paginator.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.model';
export interface QueryModel {
  name?: string;
  startDate?: string;
  endDate?: string;
  success?: boolean;
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
        page: page,
        limit: this.itemsOnPage,
      },
    });
  }
  getLaunchesByQuerry(queryParams: QueryModel): Observable<Paginator<Launch>> {
    const query = this.filterParams(queryParams);
    return this.http.post<Paginator<Launch>>(`${this.url}/launches/query`, {
      options: {
        page: 1,
        limit: this.itemsOnPage,
      },
      query,
    });
  }

  private filterParams(queryParams: QueryModel): QueryModel {
    const query: any = {};
    Object.entries(queryParams).forEach(([key, value]) => {
      value ? (query[key] = value) : null;
    });
    return query;
  }
}
