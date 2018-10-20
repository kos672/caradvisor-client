import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../shared/global-constants';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  messages = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.messages.push({text: GlobalConstants.ASK_NAME_QUESTION});
    this.messages = this.messageService.messages;
  }

}
