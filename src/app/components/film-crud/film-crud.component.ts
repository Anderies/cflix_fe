import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-crud',
  templateUrl: './film-crud.component.html',
  styleUrls: ['./film-crud.component.scss']
})
export class FilmCrudComponent implements OnInit {
  isArdi: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  panggilArdi(){
    this.isArdi = !this.isArdi
  }


}
