import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-populer-movies',
  templateUrl: './populer-movies.component.html',
  styleUrls: ['./populer-movies.component.scss']
})
export class PopulerMoviesComponent implements OnInit {

  txt = "Default";
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
      title: "3",
      img: "https://movies.alldbx.com/images/default_person.1d043.png"
    },
    {
      title: "4",
      img: "https://movies.alldbx.com/images/default_person.1d043.png"
    },
    {
      title: "5",
      img: "https://movies.alldbx.com/images/default_person.1d043.png"
    },
  ]
  constructor(private router: Router,movieService:MovieService) { }

  ngOnInit(): void {
  }

  clickMovie(){
    this.router.navigate(['movie-detail']);
  }

  // getListMovie() {
  //   this.movieService
  //   // this.movieService.getListMovie().subscribe((result:any) => {
  //   //   console.log("data", result);
  //   //   this.slides = result.data;
  //   //   console.log("slides", this.slides);
  //   // }, error => {
  //   //   alert(error)
  //   //   window.location.reload();
  //   // });
  // }

}
