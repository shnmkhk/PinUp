import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PinLookupComponentComponent } from './pin-lookup-component/pin-lookup-component.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PinLookupComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
