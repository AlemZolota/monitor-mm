import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  checkRegistration(user: string, pwd: string) {
    let result: boolean;
    // TODO improve sign in and make it safer
    if (user === 'admin' && pwd === 'admin') {
      result = true;
    } else {
      result = false;
    }
    return result;
  }

}
