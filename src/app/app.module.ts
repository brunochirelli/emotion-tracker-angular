import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RpdFormComponent } from './components/rpd-form/rpd-form.component';
import { RpdListComponent } from './components/rpd-list/rpd-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RpdFormComponent,
    RpdListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
