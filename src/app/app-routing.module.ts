import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },

  {
    path: "movie-detail/:title-seo/:id",
    component: MovieDetailComponent
  },
  {
    path: "admin",
    loadChildren: () => import('./components/film-crud/film-crud.module').then(m => m.FilmCrudModule)
  },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', useHash: false,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
