import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.showBack = true;
    this.db.showPeggy = false;    
  }

}
