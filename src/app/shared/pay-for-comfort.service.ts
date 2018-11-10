import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class PayForComfortService {

  constructor(private http: HttpClient) {
  }

  payForComfortRequest(messageWithAnswerAboutPayExtra: string) {
    return this.http.post(GlobalConstants.PAY_FOR_COMFORT_PATH, messageWithAnswerAboutPayExtra);
  }
}
