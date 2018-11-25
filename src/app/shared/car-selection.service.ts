import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from './global-constants';
import {CarDto} from './cardto.model';

@Injectable({
  providedIn: 'root'
})
export class CarSelectionService {

  requestCountryPrefs;
  requestFamily;
  requestOffroadIsOftenDrivenLocation;
  requestYearsOfDriving;
  requestAbleToPayExtraForComfort;
  carSelectionObj = {
    countryPrefs: '',
    family: '',
    offroadOftenDriven: '',
    yearsOfDriving: 0,
    ableToPayExtra: ''
  };

  constructor(private http: HttpClient) {
    this.requestCountryPrefs = new BehaviorSubject<{ countryPrefs: string }>({countryPrefs: ''});
    this.requestFamily = new BehaviorSubject<{ family: string }>({family: ''});
    this.requestOffroadIsOftenDrivenLocation = new BehaviorSubject<{ offroadOftenDriven: string }>({offroadOftenDriven: ''});
    this.requestYearsOfDriving = new BehaviorSubject<{ yearsOfDriving: number }>({yearsOfDriving: 0});
    this.requestAbleToPayExtraForComfort = new BehaviorSubject<{ ableToPayForComfort: string }>({ableToPayForComfort: ''});
  }

  sendAnswersSelection() {
    this.prepareCarSelectionObject();
    return this.http.post<CarDto[]>(GlobalConstants.CAR_SELECTION_PATH, this.carSelectionObj);
  }

  private prepareCarSelectionObject() {
    this.requestCountryPrefs.subscribe(data => this.carSelectionObj.countryPrefs = data);
    this.requestFamily.subscribe(data => this.carSelectionObj.family = data);
    this.requestOffroadIsOftenDrivenLocation.subscribe(data => this.carSelectionObj.offroadOftenDriven = data);
    this.requestYearsOfDriving.subscribe(data => this.carSelectionObj.yearsOfDriving = data);
    this.requestAbleToPayExtraForComfort.subscribe(data => this.carSelectionObj.ableToPayExtra = data);
  }
}
