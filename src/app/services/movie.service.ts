import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  env = environment;
  url = "http://cflix.site/cflix_api/backend/";
  constructor(private http: HttpClient) { }

  // HIT SECOND TO GET PROGRAM
  getListMovie() {
    console.log("this.env", this.env.API_URL)
    return this.http.get(this.env.API_URL + `home/home-new-upload.php`);
  }

  getOneMovie(video_id) {
    let body = new FormData();
    let action = "show";
    body.append('id',video_id);
    body.append('action',action);
    // const formData = new FormData()

    // formData.set('id', video_id);
    // formData.set('action', action);



    return this.http.post(this.url + `cflix_video.php`, body)
  }
  // getOneMovie(id) {
  //   return this.http.get(this.env.API_URL + );
  // }

}
