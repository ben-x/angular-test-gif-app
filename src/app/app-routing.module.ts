import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsDetailsComponent } from './results-details/results-details.component';
import { HomeComponent } from './home/home.component';
import { AllGifsComponent } from './all-gifs/all-gifs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'all-results', component: AllGifsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'results/:id', component: ResultsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
