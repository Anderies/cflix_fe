import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isTokoped : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  headerTop(){

    this.isTokoped = !this.isTokoped;
    console.log("boom",this.isTokoped);
    this.router.navigate(['']);
  }

}
