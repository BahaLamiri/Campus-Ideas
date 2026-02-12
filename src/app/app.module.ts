import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ListesuggestionComponent } from './core/listesuggestion/listesuggestion.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ListesuggestionComponent,
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
