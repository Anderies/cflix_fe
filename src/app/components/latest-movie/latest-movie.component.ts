import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-latest-movie',
  templateUrl: './latest-movie.component.html',
  styleUrls: ['./latest-movie.component.scss']
})
export class LatestMovieComponent implements OnInit {

  txt = "BANGKE LAH SIH BALAR ASKODKKSAASDSADSAASDSADSASADSA ASDSADSAD DSADSADSADSADSA";
  slides = [
    {
      title: "1",
      img: "https://movies.alldbx.com/images/default_person.1d043.png"
    }
    , {
      title: "2",
      img: "https://movies.alldbx.com/images/default_person.1d043.png"
    },
    {
      title: "2",
      img: "https://movies.alldbx.com/images/default_person.1d043.png"
    },
  ]
  constructor(private router:Router,private movieService:MovieService) { }

  ngOnInit() {
    this.getListMovie();
  }

  clickMovie(){
    console.log("boom");
    this.router.navigate(['movie-detail']);
  }

  getListMovie(){
    this.movieService.getListMovie().subscribe((data) => {
      console.log("data",data);
    });
  }
}
