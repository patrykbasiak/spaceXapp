import { Launch } from '../shared/models/launch.model';
import { Paginator } from '../shared/models/paginator.model';

export interface LaunchState {
  launches: Paginator<Launch>;
}
export const initialState: LaunchState = {
  launches: {
    docs: [],
    hasNextPage: false,
    hasPrevPage: false,
    limit: 0,
    naxtPage: 0,
    page: 0,
    pagingCounter: 0,
    prevPage: 0,
    totalDocs: 0,
    totalPage: 0,
  },
};
