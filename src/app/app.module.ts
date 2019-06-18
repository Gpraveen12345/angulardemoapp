import { UserdataService } from './userdata.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavibarComponent } from './navibar/navibar.component';
import { PostsComponent } from './posts/posts.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MostviewedComponent } from './mostviewed/mostviewed.component';
import { CorrecturlComponent } from './correcturl/correcturl.component';
import { CommentComponent } from './comment/comment.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    PostsComponent,
    FavoriteComponent,
    MostviewedComponent,
    CorrecturlComponent,
    CommentComponent,
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
   
  ],
  providers: [
    UserdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
