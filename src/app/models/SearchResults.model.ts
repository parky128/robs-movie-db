import { MovieSearchResult } from './MovieSearchResult.model';

export class SearchResults {
  page: number;
  results: Array<MovieSearchResult | number>;
  total_results: number;
  total_pages: number;
}
