import { Paginator } from './../models/paginator.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.model';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants';
import { Rocket } from '../models/rocket.model';
import { Launchpad } from '../models/launchpad.model';
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
  url = environment.spaceXurl;
  itemsOnPage = Constants.paginatorConstants.defaultPageSize;
  constructor(private http: HttpClient) {}
  getAllLaunches(page: number, size?: number): Observable<Paginator<Launch>> {
    return this.http.post<Paginator<Launch>>(`${this.url}/launches/query`, {
      options: {
        page: page,
        limit: size ? size : this.itemsOnPage,
      },
    });
  }
  getLaunchesByQuerry(
    queryParams: QueryModel,
    page?: number,
    size?: number
  ): Observable<Paginator<Launch>> {
    const query = this.filterParams(queryParams);
    return this.http.post<Paginator<Launch>>(`${this.url}/launches/query`, {
      options: {
        page: 1,
        limit: size ? size : this.itemsOnPage,
      },
      query,
    });
  }

  getLaunchById(id: string): Observable<Launch> {
    return this.http.get<Launch>(`${this.url}/launches/${id}`);
  }
  getRocketById(id: string): Observable<Rocket> {
    return this.http.get<Rocket>(`${this.url}/rockets/${id}`);
  }

  getLaunchpadById(id: string): Observable<Launchpad> {
    return this.http.get<Launchpad>(`${this.url}/launchpads/${id}`);
  }

  private filterParams(queryParams: QueryModel): QueryModel {
    const query: any = {};
    Object.entries(queryParams).forEach(([key, value]) => {
      key === 'startDate' && value
        ? (query['date_utc'] = { $gte: value })
        : null;
      key === 'endDate' && value
        ? (query['date_utc'] = { ...query['date_utc'], $lte: value })
        : null;
      key === 'name' && value ? (query['name'] = value) : null;
      key === 'success' && value ? (query['success'] = value) : null;
    });
    return query;
  }
}
