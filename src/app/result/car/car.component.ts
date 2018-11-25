import {Component, Input, OnInit} from '@angular/core';
import {CarDto} from '../../shared/cardto.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() carDto: CarDto;
  @Input() carId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
