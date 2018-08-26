import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/Person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.person = this.route.snapshot.data.person;
  }

}
