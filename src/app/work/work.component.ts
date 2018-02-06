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

  workType: string[];
  workImgs: Observable<any[]>;
  workDescript: string;
  project: string;
  otherImg = false;

  constructor(private db: DatabaseService, private router: Router, private route: ActivatedRoute) {
    this.projectName = this.route.snapshot.paramMap.get('project');
  }

  ngOnInit() {
    this.db.showBack = true;

    switch (this.projectName) {
      case 'spectrum':
        this.project = 'spectrum';
        this.workType = ['packaging design', 'art direction', 'branding'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'packaging of camera and darkroom prouducts';
        break;
      case 'surface':
        this.project = 'surface';
        this.workType = ['packaging design', 'art direction', 'branding', 'illustration'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'surf shop branding and packaging';
        break;
      case '12barProject':
        this.project = '12bar project';
        this.workType = ['art direction', 'branding', 'illustration'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'jazz music marathon live concerts branding';
        break;
      case 'spade':
        this.project = 'spade';
        this.workType = ['editorial design', 'art direction'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'editorial on drug use in america';
        break;
      case 'threePeaks':
        this.project = 'three peaks apothecary';
        this.workType = ['packaging design', 'art direction', 'branding', 'illustration', 'copy'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'marijuana packaging and branding ';
        break;
      case 'laRams':
        this.project = 'rams';
        this.workType = ['art direction', 'branding', 'illustration'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'los angeles rams branding ';
        break;
      case 'apollox':
        this.project = 'apollox20';
        this.workType = ['packaging design', 'art direction', 'branding', 'editorial ads', 'illustration'];
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.workDescript = 'moon water packaging design (https://www.nasa.gov/multimedia/imagegallery/image_feature_1478.html)';
        break;
      case 'film':
        this.project = 'film';
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.otherImg = false;
        break;
      case 'other':
        this.project = 'more';
        this.workImgs = this.db.getProjectImgs(this.projectName).valueChanges();
        this.otherImg = true;
        break;
      default:
        this.workType = ['NOT SPECTRUM'];
    }
  }

}