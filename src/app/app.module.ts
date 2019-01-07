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
import { UserListComponent } from './user-list/user-list.component';

import { UploadModule } from './upload/upload.module';
import { CommonService } from './common/common.service';
import { BoardUpdateComponent } from './board-update/board-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardwriteComponent,
    BoardlistComponent,
    NotFoundComponent,
    BoardviewComponent,
    UserListComponent,
    BoardUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UploadModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
