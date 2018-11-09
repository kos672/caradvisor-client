import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {NameService} from './name.service';
import {GlobalConstants} from './global-constants';
import {CountryPrefsService} from './country-prefs.service';
import {FamilyService} from './family.service';
import {CarSelectionService} from './car-selection.service';
import {LocationService} from './location.service';
import {ExperienceService} from './experience.service';

@Injectable()
export class MessageService {

  messages = [];
  gender: string;

  constructor(private cookieService: CookieService, private carSelectionService: CarSelectionService,
              private nameService: NameService, private countryPrefsService: CountryPrefsService, private familyService: FamilyService,
              private locationService: LocationService, private experienceService: ExperienceService) {
  }

  onSend(message: string) {
    if (!(this.cookieService.get(GlobalConstants.IS_NAME_KNOWN) === GlobalConstants.TRUE)) {
      this.nameService.nameRequest(message).subscribe(
        (res) => {
          this.cookieService.set(GlobalConstants.IS_NAME_KNOWN, GlobalConstants.TRUE);
          this.cookieService.set('gender', res['gender'] === 'm' ? 'Pan' : 'Pani');
          this.gender = this.cookieService.get('gender');
          this.messages.push({text: this.replaceGender(GlobalConstants.ASK_COUNTRY_PREFERENCES)});
        }, error => {
          console.log(error);
          this.messages.push({text: GlobalConstants.IMPOSSIBLE_RECOGNIZE_NAME});
        }
      );
    } else if (this.cookieService.get(GlobalConstants.ASKED_ABOUT_COUNTRY_PREFS) === GlobalConstants.FALSE) {
      this.countryPrefsService.preferencesRequest(message).subscribe(
        (res) => {
          if (res['preferences'] === 'y') {
            this.cookieService.set(GlobalConstants.ASKED_ABOUT_COUNTRY_PREFS, GlobalConstants.TRUE);
            this.cookieService.set(GlobalConstants.HAS_COUNTRY_PREFS, GlobalConstants.TRUE);
            this.messages.push({text: GlobalConstants.ASK_ABOUT_COUNTRY});
          } else if (res['preferences'] === 'n') {
            this.cookieService.set(GlobalConstants.ASKED_ABOUT_COUNTRY_PREFS, GlobalConstants.TRUE);
            this.messages.push({text: this.replaceGender(GlobalConstants.ASK_ABOUT_FAMILY)});
          }
        }, (error) => {
          console.log(error);
          this.messages.push({text: this.replaceGender(GlobalConstants.CANT_RECOGNIZE_PREFS)});
        }
      );
    } else if (this.cookieService.get(GlobalConstants.HAS_COUNTRY_PREFS) === GlobalConstants.TRUE &&
      this.cookieService.get(GlobalConstants.IS_COUNTRY_KNOWN) === GlobalConstants.FALSE
    ) {
      this.countryPrefsService.countryRequest(message).subscribe(
        (res) => {
          this.cookieService.set('country', res['country']);
          this.cookieService.set(GlobalConstants.IS_COUNTRY_KNOWN, GlobalConstants.TRUE);
          this.messages.push({text: this.replaceGender(GlobalConstants.ASK_ABOUT_FAMILY)});
        }, error => {
          console.log(error);
          this.messages.push({text: GlobalConstants.CANT_RECOGNIZE_COUNTRY});
        }
      );
    } else if (!(this.cookieService.get(GlobalConstants.HAS_FAMILY) === GlobalConstants.TRUE)) {
      this.familyService.familyRequest(message).subscribe(
        (res) => {
          this.messages.push({text: this.replaceGender(GlobalConstants.ASK_ABOUT_LIVING_LOCATION)});
          this.carSelectionService.requestFamily.next(res['hasFamily']);
          this.cookieService.set(GlobalConstants.HAS_FAMILY, GlobalConstants.TRUE);
        }, (error) => {
          console.log(error);
          this.messages.push({text: this.replaceGender(GlobalConstants.CANT_RECOGNIZE_FAMILY)});
        }
      );
    } else if (!(this.cookieService.get(GlobalConstants.LIVING_LOCATION_KNOWN) === GlobalConstants.TRUE)) {
      this.locationService.locationRequest(message).subscribe(
        (res) => {
          this.carSelectionService.requestLivingLocation.next(res['location']);
          this.cookieService.set(GlobalConstants.LIVING_LOCATION_KNOWN, GlobalConstants.TRUE);
          this.messages.push({text: this.replaceGender(GlobalConstants.ASK_ABOUT_EXPERIENCE)});
        }, (error) => {
          console.log(error);
          this.messages.push({text: this.replaceGender(GlobalConstants.CANT_RECOGNIZE_OFTEN_DRIVEN_LOCATION)});
        }
      );
    } else if (!(this.cookieService.get(GlobalConstants.YEARS_OF_RIDING_KNOWN) === GlobalConstants.TRUE)) {
      this.experienceService.experienceRequest(message).subscribe(
        (res) => {
          this.carSelectionService.requestYearsOfDriving.next(res['experience']);
          this.cookieService.set(GlobalConstants.YEARS_OF_RIDING_KNOWN, GlobalConstants.TRUE);
          this.messages.push({text: this.replaceGender(GlobalConstants.ASK_ABOUT_ABILITY_TO_PAY_FOR_COMFORT)});
          console.log(this.carSelectionService.requestYearsOfDriving.subscribe(data => console.log(data)));
        }, (error) => {
          console.log(error);
          this.messages.push({text: this.replaceGender(GlobalConstants.CANT_RECOGNIZE_YEAR_EXPERIENCE)});
        }
      );
    }
  }

  private replaceGender(messageToReplace: string): string {
    return messageToReplace.replace('%gend%', this.gender);
  }

}
