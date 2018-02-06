import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Project, WorkType } from '../peggy.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-edit-landing',
  templateUrl: './edit-landing.component.html',
  styleUrls: ['./edit-landing.component.css']
})
export class EditLandingComponent implements OnInit {

  constructor(public db: DatabaseService) { 
    this.db.showBack = false;
    this.db.showPeggy = true;
  }

  ngOnInit() {
  }

}
