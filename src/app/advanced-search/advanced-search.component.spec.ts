import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancedSearchComponent } from './advanced-search.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatButtonModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TmdbDiscoverService } from '../services/tmdb-discover/tmdb-discover.service';
import { TmdbSearchService } from '../services/tmdb-search/tmdb-search.service';
import { Component, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as moment from 'moment';

// tslint:disable-next-line:use-input-property-decorator
@Component({ selector: 'app-search-result-movie', template: '', inputs: ['movieSearchResult', ''] })
class SearchResultMovieStubComponent { }

describe('AdvancedSearchComponent Tests:', () => {
  let component: AdvancedSearchComponent;
  let fixture: ComponentFixture<AdvancedSearchComponent>;

  const genres = [{title: 'Star Wars'}];

  const activateRouteStub = {
    snapshot: {
      data: {
        genres: genres
      }
    }
  };
  const mockTmdbSearchService = {
    personSearch: of()
  };
  const mockTmdbDiscoverService = {
    movieSearch: of({})
  };
  const mockRouter = {
    navigateByUrl: jasmine.createSpy()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchComponent ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatIconModule,
        MatChipsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: TmdbSearchService, useValue: mockTmdbSearchService },
        { provide: TmdbDiscoverService, useValue: mockTmdbDiscoverService },
        { provide: ActivatedRoute, useValue: activateRouteStub },
        { provide: Router, useValue: mockRouter}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On adding a selected person', () => {
    it('should add the supplied person record to the selectedPersons array property', () => {
      const person = {name: 'Rob Parker'};
      component.addSelectedPerson(person);
      expect(component.selectedPersons).toContain(person);
      expect(component.selectedPersons.length).toEqual(1);
    });
  });
  describe('On removing a selected person', () => {
    it('should remove a matching item from the selectedPersons array that matches the supplied person', () => {
      const person = {name: 'Rob Parker'};
      component.addSelectedPerson(person);
      component.removeSelectedPerson(person);
      expect(component.selectedPersons.length).toEqual(0);
    });
  });
  // describe('On performing a search', () => {
  //   describe('when a person, genre, from and to release dates have been set', () => {
  //     beforeEach(() => {
        
  //     });
  //   });
  //   it('should perform a search using ', () => {
  //     component.selectedPersons = [{id: 1, name: 'Rob Parker'}];
  //     component.setGenres({id: 456});
  //     component.fromReleaseDate = moment('01-01-2018', 'DD-MM-YYYY');
  //     component.toReleaseDate = moment('31-08-2018', 'DD-MM-YYYY');
  //     fixture.detectChanges();
  //     fixture.whenStable().then(() => {
  //       const searchTerm = 'with_cast=1&with_genres=456&release_date.gte=2018-01-01release_date.lte=2018-08-31';
  //       component.performSearch();
  //       expect(mockTmdbDiscoverService.movieSearch).toHaveBeenCalledWith('sdsad');
  //     });
  //   });
  // });
});
