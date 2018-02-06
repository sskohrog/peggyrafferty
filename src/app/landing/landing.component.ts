import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  constructor(private db: DatabaseService) {
    this.db.showBack = false;
    this.db.showPeggy = false;
  }

  ngOnInit() {
  }

}
