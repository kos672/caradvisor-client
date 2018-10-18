import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../shared/global-constants';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  messages = [];

  constructor() {
  }

  ngOnInit() {
    this.messages.push({text: GlobalConstants.ASK_NAME_QUESTION});
  }

}
