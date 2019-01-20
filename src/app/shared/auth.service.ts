import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient) {
  }

  register(username: string) {
    return this.http.get(GlobalConstants.AUTHENTICATION_PATH + '?username=' + username);
  }

  login(id: string, username: string, password: string) {
    return this.http.post(GlobalConstants.AUTHENTICATION_PATH, {id: null, username: username, password: password}, {observe: 'response'});
  }
}
