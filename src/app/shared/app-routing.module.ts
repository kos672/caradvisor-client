import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProcessComponent} from '../process/process.component';
import {ResultComponent} from '../result/result.component';
import {CarDetailComponent} from '../result/car-detail/car-detail.component';

const appRoutes = [
  {path: '', component: ProcessComponent, pathMatch: 'full'},
  {
    path: 'result', component: ResultComponent, children: [
      {path: ':id', component: CarDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
