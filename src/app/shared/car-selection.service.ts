import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarSelectionService {

  requestCountryPrefs = new BehaviorSubject<{ countryPrefs: string }>({countryPrefs: ''});
  requestFamily;
  requestLivingLocation = new BehaviorSubject<{ livingLocation: string }>({livingLocation: ''});
  requestYearsOfDriving = new BehaviorSubject<{ yearsOfDriving: number }>({yearsOfDriving: 0});
  requestAbleToPayExtraForComfort = new BehaviorSubject<{ ableToPayForComfort: string }>({ableToPayForComfort: ''});

  constructor() {
    this.requestFamily = new BehaviorSubject<{ family: string }>({family: ''});
  }
}
