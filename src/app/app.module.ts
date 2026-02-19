import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ListesuggestionComponent } from './features/suggestions/listesuggestion/listesuggestion.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ListesuggestionComponent,
    AppComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
