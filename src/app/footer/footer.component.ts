import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../shared/message.service';
import {CookieService} from 'ngx-cookie-service';
import {GlobalConstants} from '../shared/global-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('message') messageToSend;

  constructor(private messageService: MessageService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.cookieService.set(GlobalConstants.IS_NAME_KNOWN, GlobalConstants.FALSE);
    this.cookieService.set(GlobalConstants.ASKED_ABOUT_COUNTRY_PREFS, GlobalConstants.FALSE);
    this.cookieService.set(GlobalConstants.IS_COUNTRY_KNOWN, GlobalConstants.FALSE);
    this.cookieService.set(GlobalConstants.HAS_FAMILY, GlobalConstants.FALSE);
    this.cookieService.set(GlobalConstants.LIVING_LOCATION_KNOWN, GlobalConstants.FALSE);
    this.cookieService.set(GlobalConstants.YEARS_OF_RIDING_KNOWN, GlobalConstants.FALSE);
    this.cookieService.set(GlobalConstants.ABLE_TO_PAY_EXTRA, GlobalConstants.FALSE);
  }

  send() {
    let message = this.messageToSend.nativeElement.value;
    this.messageToSend.nativeElement.value = '';
    this.messageService.messages.push({text: message});
    this.messageService.onSend(message);
  }

}
