import { TVSearchResult } from './TvSearchResult.model';

export class TrendingTVShowsResult {
  page: number;
  results: Array<TVSearchResult>;
  total_results: number;
  total_pages: number;
}
