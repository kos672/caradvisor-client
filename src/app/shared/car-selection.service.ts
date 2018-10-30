import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarSelectionService {

  requestCountryPrefs;
  requestFamily;
  requestLivingLocation;
  requestYearsOfDriving;
  requestAbleToPayExtraForComfort;

  constructor() {
    this.requestCountryPrefs = new BehaviorSubject<{ countryPrefs: string }>({countryPrefs: ''});
    this.requestFamily = new BehaviorSubject<{ family: string }>({family: ''});
    this.requestLivingLocation = new BehaviorSubject<{ livingLocation: string }>({livingLocation: ''});
    this.requestYearsOfDriving = new BehaviorSubject<{ yearsOfDriving: number }>({yearsOfDriving: 0});
    this.requestAbleToPayExtraForComfort = new BehaviorSubject<{ ableToPayForComfort: string }>({ableToPayForComfort: ''});
  }
}
