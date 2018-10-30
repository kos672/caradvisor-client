import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http: HttpClient) {
  }

  familyRequest(messageWithFamilyInfo: string) {
    return this.http.post(GlobalConstants.FAMILY_PATH, messageWithFamilyInfo);
  }
}
