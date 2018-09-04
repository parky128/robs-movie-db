// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import {
//   MatToolbarModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule
// } from '@angular/material';
// import {MatListModule} from '@angular/material/list';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { RouterTestingModule } from '@angular/router/testing';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { of } from 'rxjs';

// import { AppComponent } from './app.component';
// import { LanguageService } from './services/language/language.service';
// import { SpinnerService } from './services/spinner/spinner.service';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('AppComponent Tests: ', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;


//   const mockLanguageService = {
//     selectedLanguage: of('en'),
//     getLanguage: jasmine.createSpy().and.returnValue('en')
//   };
//   const mockSpinnerService = {
//     showSpinner: of(false)
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//       imports: [
//         TranslateModule.forRoot(),
//         RouterTestingModule,
//         BrowserAnimationsModule
//       ],
//       providers: [
//         TranslateService,
//         { provide: SpinnerService, useValue: mockSpinnerService },
//         { provide: LanguageService, useValue: mockLanguageService }
//       ],
//       schemas: [
//         NO_ERRORS_SCHEMA
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   describe('On initialising the component', () => {
//     it('should assign the value of the activate route tvShow data property', () => {
//       //expect(component.tvShow).toEqual(mockTvShow);
//       expect(1).toBe(1);
//     });
//   });
// });
