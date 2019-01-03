import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardwriteComponent } from './boardwrite/boardwrite.component';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BoardviewComponent } from './boardview/boardview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardwriteComponent,
    BoardlistComponent,
    NotFoundComponent,
    BoardviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
