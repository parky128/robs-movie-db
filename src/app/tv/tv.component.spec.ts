import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatCardModule,
  MatExpansionModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { TvComponent } from './tv.component';
import { LanguageService } from '../services/language/language.service';
import { TmdbTvService } from '../services/tmdb-tv/tmdb-tv.service';
import { ApiConfigService } from '../services/api-config/api-config.service';

describe('TvComponent', () => {
  let component: TvComponent;
  let fixture: ComponentFixture<TvComponent>;
  const mockTvShow = {
    name: 'Game of Thrones',
    poster_path: 'bla.jpg',
    credits: {
      cast: [{
        name: 'Rob Parker',
        character: 'John Snow'
      }]
    }
  };

  const mockApiConfigService = {
    getMoviePosterUrl: jasmine.createSpy().and.callFake((imagePath: string) => {
      return `https://www.someapi.com/images/${imagePath}`;
    }),
    getCastProfileUrl: jasmine.createSpy().and.callFake((imagePath: string) => {
      return `https://www.someapi.com/images/${imagePath}`;
    })
  };

  const activateRouteStub = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy().and.returnValue('123')
      },
      data: {
        tvShow: mockTvShow
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TvComponent ],
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activateRouteStub },
        { provide: ApiConfigService, useValue: mockApiConfigService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialising the component', () => {
    it('should assign the value of the activate route tvShow data property', () => {
      expect(component.tvShow).toEqual(mockTvShow);
    });
    it('should call getMoviePosterUrl on the apiConfigService the current tv show poster_path value', () => {
      expect(mockApiConfigService.getMoviePosterUrl).toHaveBeenCalledWith(mockTvShow.poster_path);
    });
    it('should call assign the result of calling getMoviePosterUrl on the apiConfigService to the tvShowPosterUrl property', () => {
      expect(component.tvShowPosterUrl).toEqual(`https://www.someapi.com/images/${mockTvShow.poster_path}`);
    });
  });
  // describe('When', () => {
  // });
});
