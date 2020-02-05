import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluuwebFlexboxComponent } from './components/bluuweb-flexbox/bluuweb-flexbox.component';
import { PurecssComponent } from './components/purecss/purecss.component';
import { AppleWatchComponent } from './components/apple-watch/apple-watch.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { LoginComponent } from './components/login/login.component';
import { Cube3dComponent } from './components/cube3d/cube3d.component';
import { Rotation3dComponent } from './components/rotation3d/rotation3d.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { RelojComponent } from './components/reloj/reloj.component';


const routes: Routes = [
  { path: '', component: PurecssComponent},
  { path: 'reloj', component: RelojComponent},
  { path: 'demo1', component: Demo1Component},
  { path: 'rotation3d', component: Rotation3dComponent},
  { path: 'cube3d', component: Cube3dComponent},
  { path: 'login', component: LoginComponent},
  { path: 'bakery', component: BakeryComponent},
  { path: 'sidebarmenu', component: SidebarMenuComponent},
  { path: 'applewatch', component: AppleWatchComponent},
  { path: 'bluuweb-flexbox', component: BluuwebFlexboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
