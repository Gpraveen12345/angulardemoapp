import { CommentComponent } from './comment/comment.component';
import { MostviewedComponent } from './mostviewed/mostviewed.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostsComponent } from './posts/posts.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrecturlComponent } from './correcturl/correcturl.component';

const routes: Routes = [
  {
    path:'',
    component:PostsComponent
  },
  {
    path:'favourite',
    component:FavoriteComponent
  },
  {
    path:'mostviewed',
    component:MostviewedComponent
  },
  {
    path:'comment',
    component:CommentComponent
  },
  {
    path:'**',
    component:CorrecturlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
