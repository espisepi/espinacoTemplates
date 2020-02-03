import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluuwebFlexboxComponent } from './components/bluuweb-flexbox/bluuweb-flexbox.component';
import { PurecssComponent } from './components/purecss/purecss.component';


const routes: Routes = [
  { path: '', component: PurecssComponent},
  { path: 'bluuweb-flexbox', component: BluuwebFlexboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
