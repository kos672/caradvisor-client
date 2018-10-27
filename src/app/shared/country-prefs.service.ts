import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class CountryPrefsService {

  constructor(private http: HttpClient) {
  }

  preferencesRequest(messageWithPreferences: string) {
    return this.http.post(GlobalConstants.PREFERENCES_PATH, messageWithPreferences);
  }

  countryRequest(messageWithCountry: string) {
    return this.http.post(GlobalConstants.COUNTRY_PATH, messageWithCountry);
  }

}
