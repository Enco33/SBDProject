import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterLink} from "@angular/router";
import { TimeComponent } from './time/time.component';
import {HttpClientModule} from "@angular/common/http";
import { SbdMaincompComponent } from './sbd-maincomp/sbd-maincomp.component';
import { SbdTableComponent } from './sbd-table/sbd-table.component';
import { SbdPercardComponent } from './sbd-percard/sbd-percard.component';
import { SbdExamplesComponent } from './sbd-examples/sbd-examples.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { UpdateUserComponent } from './sbd-table/update-user/update-user/update-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    SbdMaincompComponent,
    SbdTableComponent,
    SbdPercardComponent,
    SbdExamplesComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
