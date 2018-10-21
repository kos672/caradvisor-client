import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {NameService} from './name.service';
import {GlobalConstants} from './global-constants';

@Injectable()
export class MessageService {

  messages = [];

  constructor(private cookieService: CookieService, private nameService: NameService) {
  }

  // this.isEngineTypeKnown = this.cookieService.get(GlobalConstants.IS_ENGINE_TYPE_KNOWN) == 'true';
  // this.isEngineDisplacementKnown = this.cookieService.get(GlobalConstants.IS_ENGINE_DISPLACEMENT_KNOWN) == 'true';
  // this.isTransmissionKnown = this.cookieService.get(GlobalConstants.IS_TRANSMISSION_KNOWN) == 'true';
  // this.isDrivetrainKnown = this.cookieService.get(GlobalConstants.IS_DRIVETRAIN_KNOWN) == 'true';
  // this.isDoorsKnown = this.cookieService.get(GlobalConstants.IS_DOORS_KNOWN) == 'true';
  // this.isSeatsKnown = this.cookieService.get(GlobalConstants.IS_SEATS_KNOWN) == 'true';

  onSend(message: string) {
    if (!(this.cookieService.get(GlobalConstants.IS_NAME_KNOWN) == GlobalConstants.TRUE)) {
      this.nameService.nameRequest(message).subscribe(
        (res) => {
          this.cookieService.set(GlobalConstants.IS_NAME_KNOWN, GlobalConstants.TRUE);
          this.cookieService.set('gender', res['gender'] == 'm' ? 'Pan' : 'Pani');
          this.messages.push({text: GlobalConstants.ASK_COUNTRY_PREFERENCES.replace('%gend%', this.cookieService.get('gender'))});
        }, error => {
          console.log(error);
          this.messages.push({text: GlobalConstants.IMPOSSIBLE_RECOGNIZE_NAME});
        }
      );
    } else if (!(this.cookieService.get(GlobalConstants.HAS_COUNTRY_PREFS) == GlobalConstants.TRUE)) {

    } else if (false) {

    } else if (false) {

    } else if (false) {

    } else if (false) {

    } else if (false) {

    }
  }

}
