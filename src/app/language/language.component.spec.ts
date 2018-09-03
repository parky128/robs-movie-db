import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageComponent } from './language.component';
import { LanguageService } from '../services/language/language.service';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  const mockLanguageService = {
    getLanguage: jasmine.createSpy().and.returnValue('en'),
    setLanguage: jasmine.createSpy()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageComponent ],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatInputModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: LanguageService, useValue: mockLanguageService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should set the current selected language to "en"', () => {
      expect(component.selectedLanguage).toEqual('en');
    });
    it('should add "en" and "de" string values to the availableLanguages property', () => {
      expect(component.availableLanguages).toEqual(['en', 'de']);
    });
  });

  describe('when changing language', () => {
    it('should call setLanguage on the languageService using the supplied language code', () => {
      component.changeLanguage('it');
      expect(mockLanguageService.setLanguage).toHaveBeenCalledWith('it');
    });
  });
});
