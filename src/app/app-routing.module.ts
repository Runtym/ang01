import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardwriteComponent } from './boardwrite/boardwrite.component';
import { BoardlistComponent } from './boardlist/boardlist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BoardviewComponent } from './boardview/boardview.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'boardwrite',component:BoardwriteComponent},
  {path:'boardlist',component:BoardlistComponent},
  {path:'boardview/:num',component:BoardviewComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
