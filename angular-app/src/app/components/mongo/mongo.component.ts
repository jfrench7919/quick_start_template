import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss']
})
export class MongoComponent implements OnInit {

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: HttpClient, private personService: PersonService) { }

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name: any, age: any) {
    this.personService.addPerson(name, age).subscribe(p => {
      this.getAllPeople();
    });
  }

  deletePerson(person: any) {
    console.log(person);
    this.personService.deletePerson(person).subscribe(p => {
      this.getAllPeople();
    });
  }

  // Get all users from the API
  getAllPeople() {
    this.personService.getAllPeople().subscribe(p => this.people = p);
  }

}
