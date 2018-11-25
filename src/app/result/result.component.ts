import {Component, OnInit} from '@angular/core';
import {CarDto} from '../shared/cardto.model';
import {ResultService} from '../shared/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  cars: CarDto[] = [];

  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
    this.cars = this.resultService.cars;
  }

}
