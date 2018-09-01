import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/Person.model';
import { ApiConfigService } from '../services/api-config/api-config.service';
import { LanguageService } from '../services/language/language.service';
import { TmdbPersonService } from '../services/tmdb-person/tmdb-person.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, AfterViewInit, OnDestroy {
  person: Person;
  personProfileUrl: string;

  private languageSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService,
    private languageService: LanguageService,
    private tmdbPersonService: TmdbPersonService
  ) { }

  private setPersonProfileUrl = () => {
    this.personProfileUrl = this.apiConfigService.getPersonProfileUrl(this.person.profile_path);
  }

  ngOnInit() {
    this.person = this.route.snapshot.data.person;
    this.setPersonProfileUrl();
  }

  ngAfterViewInit() {
    this.languageSubscription = this.languageService.selectedLanguage.subscribe(selectedLanguage => {
      this.tmdbPersonService.getPerson(this.route.snapshot.paramMap.get('id')).subscribe((person: Person) => {
        this.person = person;
        this.setPersonProfileUrl();
      });
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
