import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-crud',
  templateUrl: './film-crud.component.html',
  styleUrls: ['./film-crud.component.scss']
})
export class FilmCrudComponent implements OnInit {
  isArdi: boolean = false;

  isAktor:boolean = true;
  isFilm:boolean = false;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  isFalse(){
    this.isAktor = false;
    this.isFilm = false;
  }



  panggilArdi(){
    this.isArdi = !this.isArdi
  }

  panggilAktor(){
    this.isFalse();
    this.isAktor = true;
  }

  panggilFilm(){
    this.isFalse();
    this.isFilm = true;

  }


}
