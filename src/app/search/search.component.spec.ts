import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';
import { TmdbSearchService } from '../services/tmdb-search/tmdb-search.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// // tslint:disable-next-line:use-input-property-decorator
// @Component({ selector: 'app-search-result-person', template: '', inputs: ['personSearchResult', ''] })
// class SearchResultPersonStubComponent { }
// // tslint:disable-next-line:use-input-property-decorator
// @Component({ selector: 'app-search-result-tv', template: '', inputs: ['tvSearchResult', ''] })
// class SearchResultTvStubComponent { }
// // tslint:disable-next-line:use-input-property-decorator
// @Component({ selector: 'app-search-result-movie', template: '', inputs: ['movieSearchResult', ''] })
// class SearchResultMovieStubComponent { }

describe('SearchComponent Tests:', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  const mockTmdbSearchService = {
    multiSearch: jasmine.createSpy()
  };
  const mockRouter = {
    navigateByUrl: jasmine.createSpy()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [
        MatAutocompleteModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: TmdbSearchService, useValue: mockTmdbSearchService },
        { provide: Router, useValue: mockRouter}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // describe('when the value of the search input changes to "brad"', () => {
  //   it('should make a call to multiSearch on the tmdbSearch service', () => {
  //     // fixture.nativeElement.querySelector()
  //     // component.search.setValue('brad');
  //     // fixture.detectChanges();
  //     // fixture.whenStable().then(() => {
  //     //   expect(mockTmdbSearchService.multiSearch).toHaveBeenCalledWith('brad');
  //     // });
  //     // expect(1).toBe(1);
  //     const app = fixture.debugElement.componentInstance;
  //     const el = fixture.nativeElement.querySelector('input');
  //     el.value = 'something';
  //     el.dispatchEvent(new Event('input'));
  //     fixture.detectChanges();
  //     fixture.whenStable().then(() => {
  //       expect(mockTmdbSearchService.multiSearch).toHaveBeenCalledWith('brad');
  //     });
  //   });
  // });
  describe('when navigating to a movie record', () => {
    it('should call navigateByUrl on the router service using the supplied movie id', () => {
      const movieSearchResult = {id: 123};
      component.goToMovie(movieSearchResult);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(`/movie/${movieSearchResult.id}`);
    });
  });
  describe('when navigating to a person record', () => {
    it('should call navigateByUrl on the router service using the supplied person id', () => {
      const personSearchResult = {id: 123};
      component.goToPerson(personSearchResult);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(`/person/${personSearchResult.id}`);
    });
  });
  describe('when navigating to a tv show record', () => {
    it('should call navigateByUrl on the router service using the supplied tv show id', () => {
      const tvShowSearchResult = {id: 123};
      component.goToTVShow(tvShowSearchResult);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(`/movie/${tvShowSearchResult.id}`);
    });
  });
  describe('when clearing the search', () => {
    it('should set the search results to an empty array', () => {
      component.clearSearch();
      expect(component.searchResults).toEqual([]);
    });
  });
});
