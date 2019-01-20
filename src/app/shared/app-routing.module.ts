import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProcessComponent} from '../process/process.component';
import {ResultComponent} from '../result/result.component';
import {CarDetailComponent} from '../result/car-detail/car-detail.component';
import {LoginComponent} from '../login/login.component';
import {LoginActivate} from '../login/login-activate';

const appRoutes = [
  {path: '', component: ProcessComponent, pathMatch: 'full', canActivate: [LoginActivate]},
  {
    path: 'result', component: ResultComponent, canActivate: [LoginActivate], children: [
      {path: ':id', component: CarDetailComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
