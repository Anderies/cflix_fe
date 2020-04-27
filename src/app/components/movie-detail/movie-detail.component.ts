import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  isLoadingMovie:boolean = false;
  dataVideo;
  safeVideoURL;
  constructor(private movieService: MovieService, 
    private sanitizer: DomSanitizer,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("params", params.id);
      this.getMovieDetail(params.id);
    });

  }

  
  getMovieDetail(id) {
    this.isLoadingMovie = true;
    this.movieService.getOneMovie(id).subscribe((result: any) => {
      this.isLoadingMovie = false;
      this.dataVideo = result.data[0];
      console.log("data video",result);
      console.log("boom", this.dataVideo);
      this.safeVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataVideo.url_video);

    },
    error=>{
      alert(error.message);
      this.isLoadingMovie = false;
      // console.log("error",error);
      // this.router.navigate(['']);
    });
  }

}
