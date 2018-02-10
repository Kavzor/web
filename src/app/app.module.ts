import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageTurnerDirective } from './directive/page-turner.directive';
import { EntryRemoteService } from './shared/entry-remote.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    GalleryComponent,
    PageTurnerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EntryRemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
