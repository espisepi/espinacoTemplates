import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluuwebFlexboxComponent } from './components/bluuweb-flexbox/bluuweb-flexbox.component';


const routes: Routes = [
  { path: '', component: BluuwebFlexboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
