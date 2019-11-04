import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { DogState } from './store/root.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogComponent } from './components/dog/dog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([DogState], {
      developmentMode: !environment.production // important to make sure ngxs freezes state to prevent mutable changes to state
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production // disable logger in production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
