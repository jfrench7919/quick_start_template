import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Add one person to the API
  addPerson(name: any, age: any): Observable<any> {
    return this.http.post(`${this.API}/users`, { name, age }).pipe(take(1));
  }

  deletePerson(person: any): Observable<any> {
    return this.http.delete(`${this.API}/users/${person._id}`).pipe(take(1));
  }

  // Get all users from the API
  getAllPeople(): Observable<any> {
    return this.http.get(`${this.API}/users`).pipe(take(1));
  }
}

