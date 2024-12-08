import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // Simulate an API call to fetch users
  getUsers(): Observable<string[]> {
    const users = ['Hamza', 'Yazan', 'Mohammad', 'Sami', 'Tal']; // Mock user data
    return of(users); // Return an observable for asynchronous handling
  }
}
