import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-populer-movies',
  templateUrl: './populer-movies.component.html',
  styleUrls: ['./populer-movies.component.scss']
})
export class PopulerMoviesComponent implements OnInit {

  txt = "BANGKE LAH SIH BALAR ASKODKKSA";
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getMovies() {
    // return this.http.get(this.env.API_URL + `program/category/${program_id}?limit=5`);
  }

  clickMovie(){
    this.router.navigate(['movie-detail']);
  }

}
