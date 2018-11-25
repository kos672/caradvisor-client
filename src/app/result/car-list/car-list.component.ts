import {Component, OnInit} from '@angular/core';
import {CarDto} from '../../shared/cardto.model';
import {ResultService} from '../../shared/result.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: CarDto[] = [];

  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
    this.cars = this.resultService.cars;
    this.reassignIDs(this.cars);
  }

  private reassignIDs(cars: CarDto[]): void {
    for (let i = 0; i < cars.length; i++) {
      cars[i].id = i;
    }
  }

}
