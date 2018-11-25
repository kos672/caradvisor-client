import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProcessComponent} from '../process/process.component';
import {ResultComponent} from '../result/result.component';

const appRoutes = [
  {path: '', component: ProcessComponent, pathMatch: 'full'},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
