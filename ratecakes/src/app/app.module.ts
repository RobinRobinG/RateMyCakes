import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewcakeComponent } from './viewcake/viewcake.component';
import { SubmitcakeComponent } from './submitcake/submitcake.component';
import { ShowallComponent } from './showall/showall.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ViewcakeComponent,
    SubmitcakeComponent,
    ShowallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
