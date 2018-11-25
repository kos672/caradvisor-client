import {Injectable} from '@angular/core';
import {CarDto} from './cardto.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  cars: CarDto[] = [];

  constructor() {
  }
}
