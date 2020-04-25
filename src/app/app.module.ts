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
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdsComponent,
    PopulerMoviesComponent,
    LatestMovieComponent,
    HomepageComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NoopAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }