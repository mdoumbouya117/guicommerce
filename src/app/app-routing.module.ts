import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfantComponent } from './home/enfant/enfant.component';
import { FemmeComponent } from './home/femme/femme.component';
import { HommeComponent } from './home/homme/homme.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'enfant', component: EnfantComponent},
  // { path: 'femme', component: FemmeComponent},
  { path: 'homme', component: HommeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
