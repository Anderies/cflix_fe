import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-new-film',
  templateUrl: './header-new-film.component.html',
  styleUrls: ['./header-new-film.component.scss']
})
export class HeaderNewFilmComponent implements OnInit {
  isInputted:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteImage(){
    confirm("Deleting Image")
  }

  uploadImage(){
    confirm("Uploading Image")
  }

  inputing(){
    this.isInputted = !this.isInputted;
  }

}
