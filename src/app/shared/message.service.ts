import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {NameService} from './name.service';
import {GlobalConstants} from './global-constants';
import {CountryPrefsService} from './country-prefs.service';
import {FamilyService} from './family.service';
import {CarSelectionService} from './car-selection.service';

@Injectable()
export class MessageService {

  messages = [];

  constructor(private cookieService: CookieService, private carSelectionService: CarSelectionService,
              private nameService: NameService, private countryPrefsService: CountryPrefsService, private familyService: FamilyService) {
  }

  onSend(message: string) {
    if (!(this.cookieService.get(GlobalConstants.IS_NAME_KNOWN) === GlobalConstants.TRUE)) {
      this.nameService.nameRequest(message).subscribe(
        (res) => {
          this.cookieService.set(GlobalConstants.IS_NAME_KNOWN, GlobalConstants.TRUE);
          this.cookieService.set('gender', res['gender'] === 'm' ? 'Pan' : 'Pani');
          this.messages.push({text: GlobalConstants.ASK_COUNTRY_PREFERENCES.replace('%gend%', this.cookieService.get('gender'))});
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
            this.messages.push({text: GlobalConstants.ASK_ABOUT_FAMILY.replace('%gend%', this.cookieService.get('gender'))});
          }
        }, (error) => {
          console.log(error);
          this.messages.push({text: GlobalConstants.CANT_RECOGNIZE_PREFS.replace('%gend%', this.cookieService.get('gender'))});
        }
      );
    } else if (this.cookieService.get(GlobalConstants.HAS_COUNTRY_PREFS) === GlobalConstants.TRUE) {
      this.countryPrefsService.countryRequest(message).subscribe(
        (res) => {
          this.cookieService.set('country', res['country']);
          this.cookieService.set(GlobalConstants.IS_COUNTRY_KNOWN, GlobalConstants.TRUE);
          this.messages.push({text: GlobalConstants.ASK_ABOUT_FAMILY.replace('%gend%', this.cookieService.get('gender'))});
        }, error => {
          console.log(error);
          this.messages.push({text: GlobalConstants.CANT_RECOGNIZE_COUNTRY});
        }
      );
    } else if (!(this.cookieService.get(GlobalConstants.HAS_FAMILY) === GlobalConstants.TRUE)) {
      this.familyService.familyRequest(message).subscribe(
        (res) => {
          this.carSelectionService.requestFamily.next(res['hasFamily']);
          this.cookieService.set(GlobalConstants.HAS_FAMILY, GlobalConstants.TRUE);
        }, (error) => {
          console.log(error);
          this.messages.push(GlobalConstants.CANT_RECOGNIZE_FAMILY);
        }
      );
    }
  }

}
