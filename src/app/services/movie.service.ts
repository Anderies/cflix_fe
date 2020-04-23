import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  env = environment;
  constructor(private http: HttpClient) { }

  // HIT SECOND TO GET PROGRAM
  getListMovie() {
    console.log("this.env",this.env.API_URL)
    return this.http.get(this.env.API_URL + `home-new-upload.php`);
  }
  // getOneMovie(id) {
  //   return this.http.get(this.env.API_URL + );
  // }

}
