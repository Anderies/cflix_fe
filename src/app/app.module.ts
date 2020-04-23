import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdsComponent } from './components/ads/ads.component';
import { PopulerMoviesComponent } from './components/populer-movies/populer-movies.component';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LatestMovieComponent } from './components/latest-movie/latest-movie.component';
import { FilmCrudComponent } from './components/film-crud/film-crud.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdsComponent,
    PopulerMoviesComponent,
    LatestMovieComponent,
    FilmCrudComponent,
    HomepageComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
