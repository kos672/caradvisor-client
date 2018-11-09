import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) {
  }

  experienceRequest(messageWithYearsOfExp) {
    return this.http.post(GlobalConstants.EXPERIENCE_PATH, messageWithYearsOfExp);
  }
}
