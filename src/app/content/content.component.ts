import {Component, OnInit} from '@angular/core';
import {Question} from './question/question.model';
import {Answer} from './answer/answer.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  messages: Question | Answer[];

  constructor() {
  }

  ngOnInit() {
  }

}
