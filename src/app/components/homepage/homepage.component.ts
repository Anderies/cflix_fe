import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from 'src/app/services/log-update.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private sw: LogUpdateService) {
    this.sw.checkForUpdates();
  }

  ngOnInit(): void {
  }

}
