import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http: HttpClient) {
  }

  nameRequest(messageWithName: string) {
    return this.http.post(GlobalConstants.NAME_PATH, messageWithName);
  }


}
