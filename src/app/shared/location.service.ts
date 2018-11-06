import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  locationRequest(messageWithLocation) {
    return this.http.post(GlobalConstants.LOCATION_PATH, messageWithLocation);
  }
}
