import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/Person.model';
import { ApiConfigService } from '../services/api-config.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, AfterContentInit {
  person: Person;
  personProfileUrl: string;

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService
  ) { }

  ngOnInit() {
    this.person = this.route.snapshot.data.person;
  }

  ngAfterContentInit() {
    this.getProfileUrl();
  }

  public getProfileUrl = () => {
    this.personProfileUrl = this.apiConfigService.getPersonProfileUrl(this.person.profile_path);
  }

}
