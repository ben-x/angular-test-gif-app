import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule} from '@angular-redux/store';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { IAppState, rootReducer, INITIAL_STATE } from './in-app-store';
import { ResultsComponent } from './results/results.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';
import { AllGifsComponent } from './all-gifs/all-gifs.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    ResultsListComponent,
    ResultsComponent,
    ResultsDetailsComponent,
    AllGifsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
