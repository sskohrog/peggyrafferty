import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project, WorkType } from '../../peggy.model';
import { DatabaseService } from '../../database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-upload-proj',
  templateUrl: './upload-proj.component.html',
  styleUrls: ['./upload-proj.component.css']
})
export class UploadProjComponent implements OnInit {

  project$: AngularFireObject<Project>;
  project: Observable<any>;
  workType$: AngularFireList<any>;
  workType: Observable<any>;
  keys: Observable<any>;  
  urlProj: string;
  ev: string;  
  image: any;
  imgs: any;
  uploadImg$: AngularFireList<any>;
  uploadPercent: any;
  downloadUrl: any;

  currentKey: any;

  constructor(private db: DatabaseService, public af: AngularFireDatabase, private storage: AngularFireStorage, private route: ActivatedRoute, private router: Router) {
    this.db.showBack = false;
    this.db.showPeggy = true;
    this.urlProj = this.route.snapshot.paramMap.get('project');
    this.imgs = [];
  }

  ngOnInit() {
    this.project$ = this.af.object('projects/' + this.urlProj);
    this.project = this.project$.valueChanges();


    this.workType$ = this.db.getWorkType(this.urlProj);
    this.workType = this.db.getWorkType(this.urlProj).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.imgs.push({name: ''});
  }

  addWorkType() {
    this.workType$.push({work: ''});
  }

  updateWorkType(key, work) {
    console.log(key);
    this.workType$.update(key,{work: work});
  }

  deleteWorkType(key) {
    this.workType$.remove(key);
  }

  addImg() {
   this.imgs.push({name: '', uploadPercent: false});
  }

  // saveImg(ev, img) {
  //   this.image = img;
  //   this.ev = ev;
  // }

  uploadImg(event, image) {
    this.uploadImg$ = this.af.list('projectImgs/' + this.urlProj);

    if (this.urlProj === 'film') { this.urlProj = 'photography'; } 
    else if (this.urlProj === ' other') { this.urlProj = 'other_things'; }
    
    var path = 'Projects/' + this.urlProj + '/' + image.name;
    const task = this.storage.upload(path,event.target.files[0]);
    this.uploadPercent = task.percentageChanges().subscribe(percent => {
      if(percent == 100) { image.uploadPercent = true; }     
    });
    this.downloadUrl = task.downloadURL().subscribe(url => {
      this.uploadImg$.push(url);
    });;


  }

  submitProject(project) {
    console.log(project);

    // this.uploadImg(this.ev,this.image);

    this.project$.update({ name: project.name });
    this.project$.update({ description: project.description });

    this.db.showPeggy = true;
    this.router.navigate(['/edit']);
  }
}