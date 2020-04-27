import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = "http://cflix.site/cflix_api/backend/";
  constructor(private http: HttpClient) { }

  addAktor(name) {
    let body = new FormData();
    body.append('action', 'add');
    body.append('name', name);
    return this.http.post(this.url + `cflix_aktor.php`, body)
  }

  getAktor() {
    let body = new FormData();
    body.append('action', 'show');
    return this.http.post(this.url + `cflix_aktor.php`, body)
  }

  editAktor(id,name){
    let body = new FormData();
    body.append('action', 'edit');
    body.append('id',id);
    body.append('name', name);
    return this.http.post(this.url + `cflix_aktor.php`, body)
  }

  deleteAktor(id){
    let body = new FormData();
    body.append('action', 'delete');
    body.append('id',id);
    console.log("boom",body);
    return this.http.post(this.url + `cflix_aktor.php`, body)
  }
}
