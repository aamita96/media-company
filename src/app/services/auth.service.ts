import { Injectable } from '@angular/core';
import { USERS } from '../mock-users';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = USERS;
  authState = new BehaviorSubject<boolean>(false);
  constructor() {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
      localStorage.setItem('user', null);
    }
  }

  /* Returns true if user is logged in */
  get isLoggedIn() {
    return this.authState.asObservable();
  }

  login(userData) {
    /* return this.users.find(m => (m.userid === userData.userid && m.password === userData.password)); */
    let userObj;
    for (const user of this.users) {
      if (user.userid === userData.userid && user.password === userData.password) {
        userObj = user;
        this.authState.next(true);
        break;
      }
    }
    return userObj;
  }

  signout() {
    this.authState.next(false);
    localStorage.setItem('user', null);
  }

  /* Returns true if user is logged in */
  /* isLoggedIn() {
    if (JSON.parse(localStorage.getItem('user')) == null) {
      this.isLoggedin;
      return this.isLoggedin;
    } else {
      return true;
    }
  } */
}
