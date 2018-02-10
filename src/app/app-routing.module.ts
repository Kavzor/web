import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: 'home', component: AboutComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
