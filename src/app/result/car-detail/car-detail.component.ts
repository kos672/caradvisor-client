import {Component, OnInit} from '@angular/core';
import {CarDto} from '../../shared/cardto.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ResultService} from '../../shared/result.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: CarDto;
  id: number;
  cars: CarDto[] = [];

  constructor(private router: Router, private route: ActivatedRoute,
              private resultService: ResultService) {
  }

  ngOnInit() {
    this.cars = this.resultService.cars;
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.car = this.cars[this.id];
      });
  }

}
