import {Component, OnInit} from '@angular/core';
import {CarDto} from '../../shared/cardto.model';
import {CarSelectionService} from '../../shared/car-selection.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: CarDto[] = [];

  // constructor(private resultService: ResultService) {
  // }
  constructor(private carService: CarSelectionService) {
  }

  ngOnInit() {
    // this.cars = this.resultService.cars;
    this.carService.getAllCars().subscribe(
      cars => {
        this.cars = cars;
        console.log(cars);
      }
    );
  }

}
