import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Project, WorkType } from '../../peggy.model';
import { DatabaseService } from '../../database.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-upload-proj',
  templateUrl: './upload-proj.component.html',
  styleUrls: ['./upload-proj.component.css']
})
export class UploadProjComponent implements OnInit {

  project$: AngularFireObject<Project>;
  // project: Observable<Project>;
  project: any;
  urlProj: string;
  workType$: AngularFireList<any>;
  workType: any;
  work: any;

  constructor(private db: DatabaseService, private af: AngularFireDatabase, private route: ActivatedRoute) {
    this.db.showBack = false;
    this.db.showPeggy = true;
    this.urlProj = this.route.snapshot.paramMap.get('project');
  }

  ngOnInit() {
    this.project$ = this.db.getProject(this.urlProj);
    this.project = this.af.object('projects/' + this.urlProj).valueChanges().subscribe(next => console.log(next),
      err => console.log(err),
      () => console.log('complete')
    );

    this.workType$ = this.db.getWorkType(this.urlProj);
    this.workType = this.db.getWorkType(this.urlProj).valueChanges().subscribe(elem => {
      this.work = elem;
    });
  }

  addWorkType() {
    this.workType$.push(new WorkType());
  }

  deleteWorkType(index) {
    // this.newProject.workType.splice(index,1);
  }

  addImg() {
    // this.newProject.img.push('');
  }

  uploadImg(event) {
    console.log(event.target.files[0]);
  }

  submitProject(project) {
    console.log(project);

    this.project$.update({ name: project.name })

  }
}
