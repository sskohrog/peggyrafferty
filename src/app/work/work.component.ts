import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Project } from '../peggy.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  projectName: string;

  workType: Observable<any[]>;
  workImgs: Observable<any[]>;
  workDescript: string;
  work$: Observable<any>;
  otherImg = false;

  constructor(private db: DatabaseService, private router: Router, private route: ActivatedRoute) {
    this.projectName = this.route.snapshot.paramMap.get('project');
  }

  ngOnInit() {
    this.db.showBack = true;

    this.work$ = this.db.getProject(this.projectName).valueChanges();
    this.workType = this.db.getWorkType(this.projectName).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
  }

}