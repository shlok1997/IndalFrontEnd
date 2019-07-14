import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InteriorComponent } from './components/interior/interior.component';
import { GruhComponent } from './components/gruh/gruh.component';
import { RedComponent } from './components/red/red.component';
import { IqComponent } from './components/iq/iq.component';
import { HolidaysComponent } from './components/holidays/holidays.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'infra-and-interiors', component: InteriorComponent },
  { path: 'gruh-udyog', component: GruhComponent },
  { path: 'red-carpet-productions', component: RedComponent },
  { path: 'project-iq', component: IqComponent },
  { path: 'club-holidays-pvt-ltd', component: HolidaysComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
